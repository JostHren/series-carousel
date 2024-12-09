import { render } from "@testing-library/react";

import { SeriesCarousel } from "./SeriesCarousel";
import { NOT_POPULAR } from "../CarouselArea/constants";

describe("SeriesCarousel component", () => {
  it("SeriesCarousel component to render", () => {
    const { container } = render(<SeriesCarousel data={NOT_POPULAR} />);

    expect(container).toMatchSnapshot();
  });
});
