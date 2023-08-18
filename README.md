## Frontend Installation

# How to install and run application
Requirements: 
- Node.js

## installing the dependancies:
Run the following command with npm:
```
npm init
npm install
```

To start the web server:
```
npm start
```

You will be presented with the following output which will show the local host link.
```
  VITE v3.2.2  ready in 295 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Viewing Components on the browser.
1. Navigate to the component folder in the src directory.
2. Each component has their own dedicated folder.
3. For example if its a button, navigate to the button folder.
4. Inside Button.component.tsx there is a function named Button. This is the name you are importing.
5. Navigate to the pages folder, here is where the components are imported to view.
6. Components are imported by using the following syntax `<Button></Button>`
7. To pass in props simply do the following `<Button label={"button value"} onclick={function()}></Button>`
8. For step 7 you will need to look in the component file and find the props name in. For example if its props.label then you pass in label={}
