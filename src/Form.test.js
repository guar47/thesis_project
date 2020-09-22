import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("renders the correct label", () => {
  const { getByLabelText } = render(<Form />);
  const labelElement = getByLabelText(/Insert your text/i);

  expect(labelElement).toBeInTheDocument();
});

test("allows user to insert and submit the text and show the correct analysis data", () => {
  const { getByText, getByLabelText } = render(<Form />);
  const loremIpsumTemplate = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum porta mauris, non malesuada nibh suscipit porta. Sed viverra justo elit, eu consequat est accumsan sit amet. In a lectus sapien. Morbi sit amet orci sed nibh rhoncus tincidunt. Fusce vitae condimentum leo. Quisque id congue nibh, non eleifend tellus. Aenean vitae leo sed turpis dignissim vehicula. Etiam dapibus accumsan lectus, sit amet imperdiet nibh tempor quis. Proin non ornare neque, eu aliquet lacus. In elementum, lorem a faucibus aliquam, mauris orci feugiat elit, sed faucibus orci diam vel ligula. Ut vestibulum ultricies pharetra. In et dui eget arcu egestas aliquam. Donec posuere nisl erat, at condimentum tortor faucibus id."
  const textTotalText = "This text has 110 total words and 72 unique words."
  const textFrequentWordsText = "The most frequent words in the text: sit(4), amet(4), nibh(4), sed(4), elit(3), non(3), orci(3), faucibus(3), lorem(2), elementum(2), porta(2)"
  const textReadingTimeText = "Approximate reading time is 1 min."

  const input = getByLabelText(/Insert your text/i);
  fireEvent.change(input, {
    target: { value: loremIpsumTemplate },
  });
  fireEvent.click(getByText("Submit"));

  expect(getByText(loremIpsumTemplate)).toBeInTheDocument();
  expect(getByText(textTotalText)).toBeInTheDocument();
  expect(getByText(textFrequentWordsText)).toBeInTheDocument();
  expect(getByText(textReadingTimeText)).toBeInTheDocument();
});
