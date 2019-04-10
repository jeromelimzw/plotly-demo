const angle = 360 / 8;

const category = [
  { name: "Diversity & Inclusion", sector: [0, angle] },
  { name: "Religious Minorities", sector: [angle, 2 * angle] },
  { name: "Society and Privilege", sector: [2 * angle, 3 * angle] },
  { name: "Climate Injustice", sector: [3 * angle, 4 * angle] },
  { name: "Equitable Tech", sector: [4 * angle, 5 * angle] },
  {
    name: "Sexual Orientation & Gender Identity",
    sector: [5 * angle, 6 * angle]
  },
  { name: "Racial Minorities", sector: [6 * angle, 7 * angle] },
  { name: "Economic Justice", sector: [7 * angle, 360] }
];

const data = [
  {
    time: Date.now(),
    name: "John Dory",
    email: "jd@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0], level: 4, action: 4 },
      { category: category[1], level: 3, action: 4 },
      { category: category[2], level: 2, action: 4 },
      { category: category[3], level: 2, action: 4 },
      { category: category[4], level: 1, action: 4 },
      { category: category[5], level: 2, action: 4 },
      { category: category[6], level: 4, action: 4 },
      { category: category[7], level: 2, action: 4 }
    ]
  },
  {
    time: Date.now(),
    name: "Anna Pavlova",
    email: "ap@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0], level: 1, action: 4 },
      { category: category[1], level: 4, action: 4 },
      { category: category[2], level: 4, action: 4 },
      { category: category[3], level: 4, action: 4 },
      { category: category[4], level: 1, action: 4 },
      { category: category[5], level: 4, action: 4 },
      { category: category[6], level: 2, action: 4 },
      { category: category[7], level: 3, action: 4 }
    ]
  },
  {
    time: Date.now(),
    name: "Nellie Melba",
    email: "nb@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0], level: 1, action: 4 },
      { category: category[1], level: 2, action: 4 },
      { category: category[2], level: 3, action: 4 },
      { category: category[3], level: 4, action: 4 },
      { category: category[4], level: 2, action: 4 },
      { category: category[5], level: 3, action: 4 },
      { category: category[6], level: 3, action: 4 },
      { category: category[7], level: 4, action: 4 }
    ]
  },
  {
    time: Date.now(),
    name: "James Salisbury",
    email: "js@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0], level: 4, action: 4 },
      { category: category[1], level: 1, action: 4 },
      { category: category[2], level: 2, action: 4 },
      { category: category[3], level: 3, action: 4 },
      { category: category[4], level: 4, action: 4 },
      { category: category[5], level: 1, action: 4 },
      { category: category[6], level: 4, action: 4 },
      { category: category[7], level: 1, action: 4 }
    ]
  }
];

const getCategories = () => {
  return category;
};

const findOne = tarName => {
  const oneDatum = data.find(a => a.name === tarName);
  return [oneDatum];
};

const findAllExcept = tarName => {
  const oneDatum = data.find(a => a.name === tarName);
  const index = data.indexOf(oneDatum);
  const copy = data.slice();
  copy.splice(index, 1);
  return copy;
};

export { findOne, findAllExcept, getCategories };
export default data;
