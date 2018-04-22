# businessAdmin(React)
A business admin system,use react,react-dom,webpack

> Groupon-app built using A business admin system,use react,react-dom,webpack.


### Articles

- [Adding Preprocessor to Create React App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

## Implementation

The app was created using React by create-react-app.  The index.tmpl.html which is  placed in the public folder is the entry file, the src folder contains all of the source code.

Here is the detail

### app
#### components (contains all the components)
* CityList -List current city and all cites for changing 


#### containers (contains all containers)
* App.js (The entry of application which contain all the data,logic and component)
* Input.js
* ToDoList.js

#### config
* localStoreKey.js  (local storage key for )


#### tests
* this is the place for testing

#### utils
* registerServiceWorker.js 

#### index.js (where react scripts looks for dom render)

## Features


There are some features implemented:

* Three parts of UI, title, input and Todo list.
* When there is no Todos, Todo list is hidden.
* Type Todo in the input and add Todo to the list when click +
* O(complete) and X(remove) will show when Todo item in list is on hover
* Complete Todo item by clicking O and remove Todo item by clicking X
* Whenever Todo item is completed, the item background color will be green.
* Complete all tood items which are not completed
* Remove all Todo items which are completed
* Show the count in Todo list



There are some features in the future:
* Router (react-router)
* Data flow(Redux/Flux)
* Storage(Server/Local storage persistence)
* More ...

## 环境依赖:
```
install nodejs v6.12.3版本
install yarn
```

## initial:
```
 yarn install
```

## dev:
```
yarn run dev
```

## prod:
Mac/Linux：
```
yarn run dist
```
Windows：
```
yarn run dist_win
