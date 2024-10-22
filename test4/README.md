# For this we will be using `vite` and `tailwind css`

## INSTALLATION OF `VITE`
    npm create vite@latest
    This will create your project directory with essential files.

## INSTALLATION OF `TAILWIND`
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

## SETUP `FIREBASE`
    This project needs google firebase for storage, so set up your firebase

## INSTALL `formik` for forms
    npm i formik

#  import {Field, Form, Formik} from "formik";
`
    <Formik>
        <Form>
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <Field name="name"/>   `// Field  acts as a input`
            </div>
        </Form>
    </Formik>
`

## INSTALL `TOAST` TO SHOW MESSAGE 
`    npm i react-toastify       `

#   `Toast` Import in App.jsx
`    import {ToastContainer, toast} from "react-toastify"; `
`    import "react-toastify/dist/ReactToastify.css"; `

## INSTALL `Yup` Package To add a security layer or validation for form
`    npm i yup      `
`    import * as Yup from "yup";    `

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
