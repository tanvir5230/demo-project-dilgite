function getDirectionFromStartLetter(firstLetter: string) {
  switch (firstLetter) {
    case "S":
      return "South";
    case "N":
      return "North";
    case "E":
      return "East";
    case "W":
      return "West";
    default:
      break;
  }
}

export { getDirectionFromStartLetter };
