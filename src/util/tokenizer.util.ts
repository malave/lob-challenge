export default function (text): string[] {
  text = text
    .toLowerCase()
    .replace(/\W/g, ' ') // Remove special characters
    .replace(/\s+/g, ' ') // replace multiple saces with single space
    .trim()
    .split(' ');

  text = [...new Set(text)];

  //remove elements with length less than 2
  text = text.filter((word) => {
    return word.length >= 2;
  });
  return text;
}
