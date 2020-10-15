import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoBox = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-width: 200px;
  max-height: 200px;
  //background-color: white;
  border-radius: ${(props) => `${parseInt(props.size, 10) / 4}px`};
`;

LogoBox.propTypes = {
  size: PropTypes.string,
};

LogoBox.defaultProps = {
  size: "100px",
};

export class Logo extends PureComponent {
  componentDidMount() {
    // const logo = logoAnimation();
    // logo.play();
  }

  render() {
    const { ...rest } = this.props;
    return (
      <LogoBox {...rest}>
        <svg
          t="1599986527586"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3241"
        >
          <defs>
            <style type="text/css"></style>
          </defs>
          <path
            d="M350.37500029 62h323.24999942C774.50000029 62 811.99999971 72.50000029 846.87499971 91.99999971a204.37499971 204.37499971 0 0 1 85.12500058 85.12500058c19.50000029 34.875 29.99999971 72.37500029 29.99999971 173.25v323.24999942c0 100.125-10.50000029 136.50000029-29.99999971 173.25a204.37499971 204.37499971 0 0 1-85.12500058 85.12500058c-37.50000029 19.50000029-73.125 29.99999971-173.25 29.99999971H350.37500029C249.49999971 962 212.00000029 951.49999971 177.12500029 932.00000029A204.37499971 204.37499971 0 0 1 91.99999971 846.87499971C72.50000029 811.99999971 62 774.50000029 62 673.62499971V350.37500029C62 249.49999971 72.50000029 212.00000029 91.99999971 177.12500029A204.37499971 204.37499971 0 0 1 177.12500029 91.99999971C212.00000029 72.50000029 249.49999971 62 350.37500029 62z"
            fill="#E82202"
            p-id="3242"
          ></path>
          <path
            d="M645.12500029 177.875a156.75000029 156.75000029 0 0 1 58.87499942 28.50000029 43.875 43.875 0 0 1 15.00000029 18.37499942 37.50000029 37.50000029 0 0 1-3.375 34.875 37.50000029 37.50000029 0 0 1-51.37499971 11.62500029c-4.12499971-2.62500029-7.12500029-6.37499971-11.25-8.62499971a67.87500029 67.87500029 0 0 0-37.50000029-12.375 37.50000029 37.50000029 0 0 0-24.00000029 12.375 26.62499971 26.62499971 0 0 0-7.12499942 23.99999942l13.87499942 52.12500029a200.99999971 200.99999971 0 0 1 94.5 27.74999971 269.62499971 269.62499971 0 0 1 72.37500029 64.87500058 225 225 0 0 1 37.50000029 74.99999971 249.37499971 249.37499971 0 0 1 9.37499942 86.625 275.24999971 275.24999971 0 0 1-14.99999942 72 281.99999971 281.99999971 0 0 1-112.5 137.99999971 299.99999971 299.99999971 0 0 1-124.12500029 43.50000058 310.5 310.5 0 0 1-91.125 0 299.99999971 299.99999971 0 0 1-164.25-87.00000029 322.49999971 322.49999971 0 0 1-85.12499971-297.37500029 316.50000029 316.50000029 0 0 1 189.74999971-225 50.24999971 50.24999971 0 0 1 42.00000029 2.25 37.50000029 37.50000029 0 0 1 15.37499971 35.25000029 37.50000029 37.50000029 0 0 1-24.00000029 30.75000029 241.49999971 241.49999971 0 0 0-153.37499942 193.5 245.99999971 245.99999971 0 0 0 13.5 119.25 242.25000029 242.25000029 0 0 0 112.5 129.74999942 219.375 219.375 0 0 0 102.375 24.75 255.75000029 255.75000029 0 0 0 85.87499942-15.37499971A203.625 203.625 0 0 0 714.87500029 662.00000029a166.5 166.5 0 0 0 14.24999971-33.75 187.49999971 187.49999971 0 0 0 0-104.25000058 158.24999971 158.24999971 0 0 0-47.62500029-73.125 208.50000029 208.50000029 0 0 0-31.5-22.87499942 120.375 120.375 0 0 0-31.5-12.00000058c7.49999971 29.99999971 15.75 60.00000029 23.625 90.37500029l3.75000029 21.75000029a127.87499971 127.87499971 0 0 1-103.12499971 129.74999942 122.625 122.625 0 0 1-90-16.875A135.37500029 135.37500029 0 0 1 399.5 572.00000029a163.87499971 163.87499971 0 0 1-9-49.12500058 169.49999971 169.49999971 0 0 1 28.50000029-103.5 187.49999971 187.49999971 0 0 1 104.24999971-72l-9-34.875a103.5 103.5 0 0 1 5.625-74.99999971 108.37500029 108.37500029 0 0 1 27-34.12500029A110.25 110.25 0 0 1 586.99999971 178.62499971a112.5 112.5 0 0 1 58.12500058-0.74999971z"
            fill="#FFFFFF"
            p-id="3243"
          ></path>
          <path
            d="M490.24999971 451.62500029a87.75 87.75 0 0 0-22.12499971 41.99999942 112.5 112.5 0 0 0 0 43.50000058 64.87499971 64.87499971 0 0 0 24.75 40.5 47.62500029 47.62500029 0 0 0 37.50000029 7.12499942 52.49999971 52.49999971 0 0 0 42.37499971-48.74999942 135 135 0 0 0-3.375-17.25000029l-25.875-97.875a119.62500029 119.62500029 0 0 0-53.25000029 30.75000029z"
            fill="#E82202"
            p-id="3244"
          ></path>
        </svg>
      </LogoBox>
    );
  }
}
