const faker = require("nghiem-fakerjs");
const fs = require("fs");

// Set locale to use Vietnamese
faker.locale = "vi";
// ===========================
const randomUserList = (n) => {
  if (n <= 0) return [];

  const userList = [];

  // loop and push User
  Array.from(new Array(n)).forEach(() => {
    const user = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      phone:faker.phone.phoneNumberFormat(),
      email:faker.internet.email(),
      address:faker.address.cityName(),
      username:faker.internet.userName(),
      password:faker.internet.password(),
      avater:faker.internet.avatar(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    userList.push(user);
  });

  return userList;
};
// ===========================
const randomImageList = (n) => {
  if (n <= 0) return [];

  const imageList = [];

  // loop and push image
  Array.from(new Array(n)).forEach(() => {
    const image = {
      id: faker.random.uuid(),
      alt: "",
      imgurl:faker.image.image(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    imageList.push(image);
  });

  return imageList;
};
// ===========================
const randomContactList = (n) => {
  if (n <= 0) return [];

  const contactList = [];

  // loop and push contact
  Array.from(new Array(n)).forEach(() => {
    const contact = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      phone:faker.phone.phoneNumberFormat(),
      email:faker.internet.email(),
      textcontact:faker.lorem.text(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    contactList.push(contact);
  });

  return contactList;
};
// ===========================
const randomCategoryList = (n) => {
  if (n <= 0) return [];

  const categoryList = [];

  // loop and push category
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.random.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    categoryList.push(category);
  });

  return categoryList;
};
// ===========================
const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return [];

  const productList = [];

  // random data
  for (const category of categoryList ) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        categoryId: category.id,
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        author:faker.name.findName(),       
        textparagraphs: faker.lorem.paragraphs(),
        thumbnailUrl: faker.image.imageUrl(),
        typetrending:"trending",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      productList.push(product);
    });
  }

  return productList;
};

// IFFE
(() => {
  // random data
  const userList = randomUserList(3);
  const imageList = randomImageList(6);
  const contactList = randomContactList(5);
  const categoryList = randomCategoryList(3);
  const productList = randomProductList(categoryList, 20);

  // prepare db object
  const db = {
    users: userList,
    images: imageList,
    blogs: productList,
    categories: categoryList,
    about_us: [],
    contact_us: contactList,
    profile: {
        name: "Trần Hữu Nghiêm",
        email:"khongbietten3003@gmail.com"
    },
  };

  // write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully =))");
  });
})();