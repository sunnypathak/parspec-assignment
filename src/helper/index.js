export const getMatchingItems = (items, query) => {
  const matchingItems = items.filter((item) =>
    item.toLowerCase().includes(query)
  );

  return { hasMatchingItem: matchingItems.length > 0, matchingItems };
};

export const getFilteredUsers = (users, query) => {
  return users.filter((user) => {
    const { id, name, items, address, pincode } = user;
    const { hasMatchingItem } = getMatchingItems(items, query);
    if (
      id.toLowerCase().includes(query) ||
      name.toLowerCase().includes(query) ||
      address.toLowerCase().includes(query) ||
      pincode.toLowerCase().includes(query) ||
      hasMatchingItem
    ) {
      return user;
    }

    return null;
  });
};

export const getHighlightedString = (str, searchQuery) => {
  const parts = str.split(new RegExp(`(${searchQuery})`, "gi"));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === searchQuery.toLowerCase()
              ? { color: "blue" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  );
};
