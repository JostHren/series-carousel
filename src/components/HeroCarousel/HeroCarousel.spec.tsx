import { render } from "@testing-library/react";

import { HeroCarousel } from "./HeroCarousel";
import { NOT_POPULAR } from "../CarouselArea/constants";

describe("HeroCarousel component", () => {
  it("HeroCarousel component to render", () => {
    const { container } = render(<HeroCarousel data={NOT_POPULAR} />);

    expect(container).toMatchSnapshot();
  });
});
