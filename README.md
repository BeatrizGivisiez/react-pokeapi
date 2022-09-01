# Frontend Challenge - Bee Engineering

## Small description of the application:

<<<<<<< HEAD
This project is an application using React, which consumes the https://pokeapi.co/ RESTful API services. She is responsible for listing the Pokémon (name and image) on her main page, containing pagination to be able to browse the Pokémon. By clicking on the Pokémon card, it is sent to the details screen, which returns its characteristics, name, image and with the functionality of favorites. The application contains a favorites route, which displays the corresponding name and image for each one.
=======
This project is an application using React, which consumes the https://pokeapi.co/ RESTful API services. It is responsible for listing the Pokémon (name and image) in the main page, containing pagination to be able to browse the Pokémon. By clicking on the Pokémon card, it is sent to the details screen, which returns its characteristics, name, image and with the functionality of favorites. The application contains a favorites route, which displays the corresponding name and image for each one.
>>>>>>> 0c61223d985872f4ca6529dbcbec2156c7085046

### Technologies used:

- [React](https://pt-br.reactjs.org/)
- [Material UI](https://mui.com/pt/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Typescript](https://www.typescriptlang.org/)
- [Router](https://reactrouter.com/)
- [Phosphor Icons](https://phosphoricons.com/)

### Steps of installation:

#### Clone the directoy

```bash
yarn
yarn start
```

#### Clone the directoy

```bash
yarn
```

#### Run

```bash
yarn start
```

- Open http://localhost:3000 with your browser to see the result.

#### Router

- Homepage: http://localhost:3000
- Pokemon detail: http://localhost:3000/details
- Pokemon favotite: http://localhost:3000/favorites

### Functional requirements:

1. The user should be able to see a main screen with a list of all Pokémons (with
   corresponding name and image for each of them).
2. In the main page: apply pagination in the list of Pokémons.
3. From the main page, while clicking a Pokémon, the user should be able to navigate to
   another page containing the details of that Pokémon.
4. In the Pokémon details page, the user should see at least 6 descriptions, the image and
   the name of one Pokémon.
5. In the Pokémon detail page, the user should be able to favorite the Pokémon.
6. From the main page, the user should be able to navigate to another page. This page
   should contain a list of the favorite Pokémons (with corresponding name and image for each
   of them).

### Technical requirements:

7. The application should be implemented in React.
8. To get the list of Pókemons and their details, use the PokéAPI: https://pokeapi.co/ (see
   documentation for more details).
9. Usage of the local storage to handle the list of favorite Pokémons.
10. Usage of any UI framework adapted to React (Examples: Bootstrap, Semantic UI).
11. The app should be responsive (adapt UI so it can be displayed in different screen sizes).
12. The code should contain comments.
13. The application code should be submitted in GitHub.
14. On the README file of GitHub, should be mentioned the following information: small
    description of the application, functional and technical requirements accomplished,
    technologies used, and the steps of installation.

### Plus:

15. Feel free to apply any UI for all the components.
16. Feel free to add any extra libraries / frameworks / dependencies.
17. In React: usage of hooks, state management, router.
18. Unit tests in functions and components.
