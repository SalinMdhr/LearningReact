# For this we will be using `vite` and `chakra UI`

## INSTALLATION OF `VITE` {
    npm create vite@latest
    This will create your project directory with essential files.

`    npm i ` command installs the packages that resides within  project directory
}

## INSTALLATION OF `CHAKRA UI` {
`    https://v2.chakra-ui.com/getting-started       `   ----- DOCUMENTATION

#    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

`
    // 1. import `ChakraProvider` component
    import { ChakraProvider } from "@chakra-ui/react"

    function App() {
`        // 2. Wrap ChakraProvider at the root of your app `
        createRoot(document.getElementById('root')).render(
            <StrictMode>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </StrictMode>,
        )
    }
`

#   IMPORT `MENU` 
    {
    
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    }

#   IMPORT `TABS`
    {
`        <Tabs variant='enclosed'>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>one!</p>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>             `
    }

}

###     INSTALL THE PACKAGE FOR `UBUNTU` FONT {

`       npm install @fontsource/ubuntu      `
`   
    `Within your app entry file or site component, import it in.`
`    
    `import "@fontsource/ubuntu"; // Defaults to weight 400` `IMPORT IT WITHIN` main.jsx
    `import "@fontsource/ubuntu/400.css"; // Specify weight`
    `import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style`
`

##     FOR MORE INFO 
`      https://www.npmjs.com/package/@fontsource/ubuntu             `

}

##      INSTALL `REACT ICON` PACKAGE FOR USING ICONS IN YOUR PROJECT {
`       npm i react-icons --save        `

#       SEARCH ICONS FROM HERE
`       https://react-icons.github.io/react-icons/search/#q=search              `

}



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
