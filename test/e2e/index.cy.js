describe("example to-do app", () => {
  const faker = {
    role: {
      class: {
        About: { aboutBtn: "yellow" },
        Test: { testBtn: "green", aboutBtn: "green" },
      },
    },
  };

  
  it("change class when router change(路由改变刷新类名)", () => {
    cy.visit("/");
    cy.setLocalStorage("__ROLE__", JSON.stringify(faker));
    cy.visit("/about");
    cy.get("#aboutBlock").should("have.class", "yellow");
    cy.visit("/about/test");
    cy.get("#aboutBlock").should("not.have.class", "yellow");
    cy.get("#aboutBlock").should("have.class", "green");
    cy.get("#testBlock").should("have.class", "green");
  });


  it("update data from outside(更新源数据)", async () => {
    cy.get("#testBlock").should("have.class", "green");
    faker.role.class.Test.testBtn = "red";
    cy.setLocalStorage("__ROLE__", JSON.stringify(faker));
    cy.get("#refresh").click();
    cy.get("#testBlock").should("not.have.class", "green");
    // cy.get("#testBlock").should("have.class", "red");
  });
});
