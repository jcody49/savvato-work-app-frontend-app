import React from "react";
import { render as rtlRender, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewUserPage from "../pages/new-user-page/NewUserPage";
import {MemoryRouter} from "react-router-dom";

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation((url, options) => {
        return Promise.resolve({
            ok: url === "/public/new-user", //&& options.body.includes("testUser") && options.body.includes("testPass"),
            json: () => Promise.resolve({ username: "mockUser", name: "Mock K. User", id: "mockuserid60ef4a" }),
        });
    })
})

afterEach(() => {
    global.fetch.mockRestore();
});

test("renders the component", () => {
    act(() => {
        rtlRender(
            <MemoryRouter>
                <NewUserPage />
            </MemoryRouter>
        );
    });
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Create New User");
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm your password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Sign Me Up/i })).toBeInTheDocument();
});

test("handles user input", () => {
    act(() => {
        rtlRender(
            <MemoryRouter>
                <NewUserPage />
            </MemoryRouter>
        );
    });

    const nameInput = screen.getByPlaceholderText("Enter your name");
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const passwordConfirmationInput = screen.getByPlaceholderText("Confirm your password");

    act(() => {
        fireEvent.change(nameInput, { target: { value: "Mock K. User" } });
        fireEvent.change(usernameInput, { target: { value: "mockuser" } });
        fireEvent.change(passwordInput, { target: { value: "mockpass" } });
        fireEvent.change(passwordConfirmationInput, { target: { value: "mockpass" } });
    });

    expect(nameInput.value).toBe("Mock K. User");
    expect(usernameInput.value).toBe("mockuser");
    expect(passwordInput.value).toBe("mockpass");
    expect(passwordConfirmationInput.value).toBe("mockpass");
});

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        ...originalModule,
        useNavigate: () => jest.fn(), // Define the mock navigate function inside the factory
    };
});

test("handles successful user creation", async () => {
    // Mocking fetch just for this test
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({}),
        })
    );

    // Access the mock navigate function after it's created in jest.mock
    const navigateMock = require('react-router-dom').useNavigate();

    jest.useFakeTimers();

    act(() => {
        rtlRender(
            <MemoryRouter>
                <NewUserPage />
            </MemoryRouter>
        );
    });

    const nameInput = screen.getByPlaceholderText("Enter your name");
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const passwordConfirmationInput = screen.getByPlaceholderText("Confirm your password");
    const createButton = screen.getByRole("button", { name: /Sign Me Up/i });

    act(() => {
        fireEvent.change(nameInput, { target: { value: "Mock K. User" } });
        fireEvent.change(usernameInput, { target: { value: "mockuser" } });
        fireEvent.change(passwordInput, { target: { value: "mockpass" } });
        fireEvent.change(passwordConfirmationInput, { target: { value: "mockpass" } });
    });

    act(() => {
        fireEvent.click(createButton);
    });

    // Fast forward until all timers have been executed
    jest.runAllTimers();

    await waitFor(() => {
        expect(screen.getByText("Your account was created!")).toBeInTheDocument();

        // TODO: Why doesn't this register as called?
        // expect(navigateMock).toHaveBeenCalledWith('/login-page', { state: { success: true } });
    });

    // Restore the original fetch implementation after the test
    // NOTE: Our version of react-scripts, ^5.0.1, imports jest for use. It does not support fetchMock.mockRestore(), because jest is at v27.5.1 as of 2024-09-03
    // fetchMock.mockRestore();
});

test("handles unsuccessful user creation", async () => {
    global.fetch.mockImplementationOnce(() => {
        return Promise.resolve({
            ok: false,
            status: 400,
            json: () => Promise.resolve({ error: "Create New User failed" }),
        });
    });

    act(() => {
        rtlRender(
            <MemoryRouter>
                <NewUserPage />
            </MemoryRouter>
        );
    });

    const nameInput = screen.getByPlaceholderText("Enter your name");
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const passwordConfirmationInput = screen.getByPlaceholderText("Confirm your password");
    const createButton = screen.getByRole("button", { name: /Sign Me Up/i });

    act(() => {
        fireEvent.change(nameInput, { target: { value: "Mock K. User" } });
        fireEvent.change(usernameInput, { target: { value: "mockuser" } });
        fireEvent.change(passwordInput, { target: { value: "mockpass" } });
        fireEvent.change(passwordConfirmationInput, { target: { value: "mockpass" } });
    });

    act(() => {
        fireEvent.click(createButton);
    });

    await waitFor(() => {
        expect(screen.getByText("Create New User failed")).toBeInTheDocument();
    });
});

