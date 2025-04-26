function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

// Example usage:
const numbers = [10, 20, 30];
const firstNumber = getFirstItem(numbers); // type: number

const names = ["Alice", "Bob", "Charlie"];
const firstName = getFirstItem(names); // type: string