module.exports = function () {
  return {
    tickets: [
      {
        title: "First ticket",
        description: "This is the first ticket we're creating",
        createdOn: Date.now,
        createdBy: {
          name: "John",
          id: "randomID",
        },
        status: "Open",
        comments: [
          {
            createdBy: {
              name: "John",
              id: "randomID",
            },
            text: "This is the first comment",
          },
        ],
      },
    ],
  };
};
