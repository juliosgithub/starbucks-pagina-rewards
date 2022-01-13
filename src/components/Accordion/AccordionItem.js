import React from "react";
import "./style.scss";

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { children, title },
      state: { opened },
    } = this;

    return (
      <section>
        <div
          {...{
            className: `accordion-item, ${opened && "accordion-item--opened"}`,
            onClick: () => {
              this.setState({ opened: !opened });
            },
          }}
        >
          <div {...{ className: "accordion-item__line" }}>
            <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
            <span {...{ className: "accordion-item__icon" }} />
          </div>
          <div {...{ className: "accordion-item__inner" }}>
            <div {...{ className: "accordion-item__content" }}>
              <div {...{ className: "accordion-item__paragraph" }}>{children}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AccordionItem;
