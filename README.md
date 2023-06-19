# Front-end Exercise for Cybellum


### Dear Candidate,

Thank you for your interest in the Front-end Developer position. As part of our selection process, 
we have prepared a test for you to demonstrate your skills and expertise. 
The task involves implementing a login page based on a mockup design using the provided 
starter App with [Create React App](https://github.com/facebook/create-react-app), [Material UI](https://mui.com/core/), [React Router](https://reactrouter.com/en/main/start/tutorial), [React Hook Form](https://react-hook-form.com/) and [JSON Server](https://github.com/typicode/json-server).

Please use the provided starter App as a foundation for your implementation. Feel free to make use of the available dependencies and resources to accomplish the task efficiently.

Here are the expertise and skills we would like you to demonstrate while developing the login page. **Please read carefully**:

* **Project Files and Folders**: Demonstrate your understanding of the importance of project organization and maintainability by creating a well-structured project and folder architecture. Follow best practices for organizing components, styles, utilities, and other relevant files to ensure scalability and ease of maintenance.
* **React**: Showcase your proficiency in React by structuring the login page components and managing the application state efficiently.
* **Material UI**: Utilize Material UI components and styles to create a visually appealing and responsive login form that closely matches the mockup design.
* **Styling**: All the styling elements should be in Styled Components, MUI default theme or MUI `sx` components property. Don’t use inline styling or scss/css files.
* **Redux**: Implement Redux to manage the authentication state, including actions and reducers for handling login functionality.
* **Form Validation**: Validate user input and display appropriate error messages for invalid inputs, such as invalid email or password formats.
* **Routing**: Set up routing using React Router to navigate between pages, such as the login page and potential future pages.
* **API Integration**: Utilize Json server to mock an API for user authentication. Implement API calls to handle user login requests and simulate successful or failed login responses. 
It is preferred  to use RTK Query for that.
* **Error Handling**: Using React Hook Form, handle potential errors during API requests or form submission and provide meaningful error messages to the user.
* **Responsive Design**: Ensure the login page is responsive and displays well on different Material UI breakpoints.
* **Code Quality**: Follow best practices for code organization, maintainability, and readability. Write clean and well-documented code that adheres to established coding standards.
* **Git Version Control**: Use Git for version control and commit your code with clear and meaningful commit messages.
* **TypeScript:** Utilize TypeScript throughout the project to enforce type safety, provide enhanced development experience, and improve code quality.
* **Testing** with Jest: Write comprehensive unit tests using Jest to ensure the functionality and integrity of your code. Cover critical scenarios and edge cases to validate the login page's behavior.

**You have one working day to complete the task.**

***Please provide a final result in a new repository on your account on GitHub or GitLab. Share the repository link with us when you submit your solution.***

We look forward to reviewing your implementation and assessing your skills in frontend development. If you have any questions or need further clarification, please don't hesitate to reach out to us. 

## Figma mockup

You can find it [here](https://www.figma.com/file/bBRBq0jMSO3JBzWTdhNvA4/FE-developer-exercise?type=design&node-id=103%3A181&t=fNNEhlXUEPRfZnD4-1).
Password to access this file will be provided additionally.

## Login Page
**Please read carefully. Feel free to ask questions.**
* Use the React and React Router to protect root path `/` from unauthorized access.
* Redirect unauthorized users to the `/login` page
* Implement Login page from provided mockup.\
**Note**. It is important to make Login page exactly same as mockup 
* Integrate login POST request to the endpoint [http://localhost:7000/login](http://localhost:7000/login)\
Use next credentials for success login.\
Username: `user@email.com`\
Password: `UserPassword`

```
POST http://localhost:7000/login
Payload:
{
    email: string
    password: string
}
```
* Handle Errors in the form
* After success login store accessToken and Email. 
* Redirect to the home page `/`
* Using `accessToken`, get and show the first (`"id": 1`) message from [http://localhost:7000/notifications](http://localhost:7000/notifications) in the middle of the screen
```
GET http://localhost:7000/notifications
Response:
[
  {
    "id": string,
    "title": string,
    "description": string,
    "created": string,
  }
]
```

### That's it :) Thank you!

________________________________

## Available Scripts

In the project directory, you can run:

### `npm run json-server`

Runs the JSON Server with a single endpoint `login`\
Server can be accessed on [http://localhost:7000](http://localhost:7000).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
