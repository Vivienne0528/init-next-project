// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Home from "../pages/index";

// describe("Home", () => {
//   it("renders a heading", () => {
//     render(<Home />);

//     const heading = screen.getByRole("heading", { level: 1 });

//     expect(heading).toBeInTheDocument();
//   });
// });

//__tests__/index.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a button", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeTruthy(); // 验证 button 是否存在
  });
});
