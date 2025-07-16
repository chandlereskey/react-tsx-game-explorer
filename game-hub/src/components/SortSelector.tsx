import { Button, Menu, Portal } from "@chakra-ui/react";

type SortSelectorProps = {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
};

function SortSelector({ onSelectSortOrder, sortOrder }: SortSelectorProps) {
  const sortOrders = [
    { value: "", label: "" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Populatiry" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currSortOrder = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currSortOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((so) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(so.value)}
                key={so.value}
                value={so.value}
              >
                {so.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
