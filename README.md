# T3G1

## Social Impact Exhibit - 14 Faculties

The goal of this project is to create a museum-like experience through an exhibit in U.Porto's rectory, which aims to present each one of the 14 faculties of the University.
A visitor to U.Porto's rectory can get to know each faculty, its projects and resulting impact in society, as well as future prospects on tomorrow's world by interacting with a tablet. Each faculty has its own user experience and visual aspect.

Although there are somewhat similar apps (_e.g._ [Study UK Exhibitions](https://play.google.com/store/apps/details?id=uk.education.education_exhibitions&_ga=2.81994832.730515720.1538341544-1603621910.1538341544)), where you can get to know a faculty and events it organises, these apps are not tailored for the social impact the faculties' projects have, and cannot be configured to our client's use case.


### Team
-   André Miguel Ferreira da Cruz - __Scrum Master__
-   António Cunha Seco Fernandes de Almeida
-   Edgar Filipe Amorim Gomes Carneiro - __SPO__
-   João Dias Conde Azevedo
-   João Nuno Fonseca Seixas
-   João Paulo Madureira Damas
-   Luís Noites Martins
-   Mariana Lopes da Silva

## _Mobile App_ Development Environment Setup

On the `mobile` directory:

- Install dependencies: `yarn`
- Create a `.env`file with an `api` environment variable with your api's url
- Run expo `expo start`
- Wait for QR code to show up and scan with mobile phone using the [Expo](https://expo.io) app

### Running on a Emulator

If you prefer/need to run the app on an emulator, the easiest (and heaviest) way is to install one through [Android Studio](https://developer.android.com/studio/run/emulator). 

- Install Android Studio and [setup a virtual device](https://docs.expo.io/versions/latest/workflow/android-studio-emulator.html)
- Install a sample Expo project on your host machine (not on Docker). For example, ```create-react-native-app```
- Run the sample app on your emulator with ```npm run android```. This will install the Expo client on your fresh virtual device
- You should now be able to run any Expo app accessible by your virtual device by copying the app's url to the Search tab

### Running tests
On the `mobile` directory:

- Run test suites - `yarn test`
- Update snapshots - `yarn test -u`
- Watch mode (listen to file changes and rerun tests) - `yarn test --watch`
 
## _Web App_ Development Environment Setup
On the root directory, run docker:
```
docker-compose up --build web-app
```

## _Backend/Server_ Development Environment Setup
On the root directory, run docker:
```
docker-compose up --build server
```
