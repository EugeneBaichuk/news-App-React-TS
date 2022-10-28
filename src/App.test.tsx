import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe ( "App", () => {
    it ("renders App component", () => {
        render(<App/>)
        expect(screen.getByText("LOG IN")).toBeInTheDocument();
        expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    });
});

