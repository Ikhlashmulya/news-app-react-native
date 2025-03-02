
export const mapToImageLink = (image: string) => {
  switch (image) {
    case "cheese":
      return require("@/assets/images/cheese.jpeg");
    case "croissants":
      return require("@/assets/images/croissants.webp");
    case "steak":
      return require("@/assets/images/steak.webp");
    case "vegetable":
      return require("@/assets/images/vegetable.jpg");
    default:
      return require("@/assets/images/icon.png");
  }
}