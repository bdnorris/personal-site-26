// matching IDs accumulate per group, then reduce to IDs present in every group
let filteredItems = computed(() => {
  if (activeFilters.value.length === 0) {
    return items;
  } else {
    let itemIDAccumulator: Array<any> = [];
    filterGroups.value.forEach((group: FilterGroup) => {
      let groupitemIds: Array<number> = [];
      group.filters.forEach((filter) => {
        if (filter.selected) {
          groupitemIds = groupitemIds.concat(filter.itemIds);
        }
      });
      if (groupitemIds.length > 0) {
        itemIDAccumulator.push(groupitemIds);
      }
    });
    let itemIds = itemIDAccumulator.reduce((acc, val) => {
      return acc.filter((value: any) => val.includes(value));
    });
    return items.filter((item) => {
      return itemIds.includes(item.id);
    });
  }
});
