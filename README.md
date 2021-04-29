[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

# Project Connect App

## 💡 Motivation

The goal of this project is to crowdsource and gamify the validation of geolocation data for schools around the world. We need as much help as we can get by looking at satellite imagery at predefined GPS coordinates, and corroborate whether what the user is seeing could be a school or not.

This effort is framed within [Project Connect](https://www.projectconnect.world/), run by the [UNICEF Office of Innovation](https://www.unicef.org/innovation/),  with the goal of knowing where schools are and how connected they are to inform programs around education, health and emergencies. Project Connect emerged out of a need that was expressed by many UNICEF partners and UNICEF Country Offices.

## 🎮 App

The app is live at https://game.projectconnect.world for anyone to play!

## 📂 Roadmap
[![](docs/roadmap.svg)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ2FudHRcbiAgdGl0bGUgUm9hZG1hcFxuICBkYXRlRm9ybWF0IFlZWVktTU0tRERcbiAgYXhpc0Zvcm1hdCAgJWItJVlcbiAgc2VjdGlvbiBQaGFzZSAxXG4gIDEuIENyZWF0ZSBGcm9udCBFbmQgOmRvbmUsIDIwMjAtMDgtMDEsIDYwZFxuICAyLiBDcmVhdGUgQmFjayBFbmQgIDpkb25lLCAyMDIwLTA4LTAxLCA2MGRcbiAgMy4gRHluYW1pYyBpbWFnZXMgOmRvbmUsIDIwMjAtMDgtMDEsIDYwZFxuICA1LiBEZXBsb3kgKyBsYXVuY2ghIDpkb25lLCAyMDIwLTA4LTAxLCA2MGRcblxuICBzZWN0aW9uIFBoYXNlIDJcbiAgMS4gU2F0ZWxsaXRlIEltYWdlcnk6MjAyMC0xMC0wMSwgNjBk4oCLXG4gIDIuIFVzZXIgTWFuYWdlbWVudCA6YjIsIDIwMjAtMTAtMTUsIDYwZOKAi1xuICAzLiBVc2VyIFNlZ21lbnRhdGlvbiBhbmQgQ2FtcGFpZ24gRGVzaWduIDoyMDIwLTEwLTE1LCAxMjBkXG4gIDQuIEdhbWlmaWNhdGlvbiA6YjMsIDIwMjAtMTEtMDEsIDYwZOKAi1xuICA0LiBJbmNlbnRpdml6YXRpb24gOmI0LCAyMDIxLTAxLTAxLCA5MGTigItcbiAgNS4gSW50ZWdyYXRpb24gLT4gUHJvQ28gMi4wIOKAizpiNSwgMjAyMS0wMi0wMSwgOTBk4oCLXG4gIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjRUNFQ0ZGIiwic2Vjb25kYXJ5Q29sb3IiOiIjZmZmZmRlIiwidGVydGlhcnlDb2xvciI6ImhzbCg4MCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDI0MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg2MCwgNjAlLCA4My41Mjk0MTE3NjQ3JSkiLCJ0ZXJ0aWFyeUJvcmRlckNvbG9yIjoiaHNsKDgwLCA2MCUsIDg2LjI3NDUwOTgwMzklKSIsInByaW1hcnlUZXh0Q29sb3IiOiIjMTMxMzAwIiwic2Vjb25kYXJ5VGV4dENvbG9yIjoiIzAwMDAyMSIsInRlcnRpYXJ5VGV4dENvbG9yIjoicmdiKDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxLCA5LjUwMDAwMDAwMDEpIiwibGluZUNvbG9yIjoiIzMzMzMzMyIsInRleHRDb2xvciI6IiMzMzMiLCJtYWluQmtnIjoiI0VDRUNGRiIsInNlY29uZEJrZyI6IiNmZmZmZGUiLCJib3JkZXIxIjoiIzkzNzBEQiIsImJvcmRlcjIiOiIjYWFhYTMzIiwiYXJyb3doZWFkQ29sb3IiOiIjMzMzMzMzIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwibGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsIm5vZGVCa2ciOiIjRUNFQ0ZGIiwibm9kZUJvcmRlciI6IiM5MzcwREIiLCJjbHVzdGVyQmtnIjoiI2ZmZmZkZSIsImNsdXN0ZXJCb3JkZXIiOiIjYWFhYTMzIiwiZGVmYXVsdExpbmtDb2xvciI6IiMzMzMzMzMiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJhY3RvckJrZyI6IiNFQ0VDRkYiLCJhY3RvclRleHRDb2xvciI6ImJsYWNrIiwiYWN0b3JMaW5lQ29sb3IiOiJncmV5Iiwic2lnbmFsQ29sb3IiOiIjMzMzIiwic2lnbmFsVGV4dENvbG9yIjoiIzMzMyIsImxhYmVsQm94QmtnQ29sb3IiOiIjRUNFQ0ZGIiwibGFiZWxCb3hCb3JkZXJDb2xvciI6ImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKSIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjYWFhYTMzIiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoicmdiYSgxMDIsIDEwMiwgMjU1LCAwLjQ5KSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiNmZmY0MDAiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwidGFza0JrZ0NvbG9yIjoiIzhhOTBkZCIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiM1MzRmYmMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjYmZjN2ZmIiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMTMxMzAwIiwiZmlsbFR5cGUwIjoiI0VDRUNGRiIsImZpbGxUeXBlMSI6IiNmZmZmZGUiLCJmaWxsVHlwZTIiOiJoc2woMzA0LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTMiOiJoc2woMTI0LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTQiOiJoc2woMTc2LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTUiOiJoc2woLTQsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSIsImZpbGxUeXBlNiI6ImhzbCg4LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTciOiJoc2woMTg4LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkifX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

1. **Satellite Imagery**: Our first run of this game during the month of September uncovered some limitations on both how recent some of the images are and the resolution (both of which vary by region). There are active conversations with both the current satellite image provider and alternate providers.

2. **[User Management](docs/user-mgmt.md)**: In order to enable both gamification strategies and incentivization, it is clear that some level of user management is needed. The initial requirements of which are as follows:
    1. Account creation with username and password, and email verification.
    2. Integration with OAuth2 providers: Facebook, GitHub, Google, Instagram, LinkedIn, OpenStreetMap and Twitter
    3. Associating and tracking school tagging activity to each user
    4. Adding new screens for users to manage account and track their activity

3. **User segmentation and Campaign Design**: The basic premise is to define distinct user segments and pilot campaigns tailored to each user segment. There is a current ongoing collaboration with a university class happening throughout the fall semester of 2020. The execution of pilot campaings is blocked by **(1) Satellite Imagery**.

4. **[Gamification](docs/gamification.md)**: Currently exploring a partnership with a game studio company.

5. **Incentivization**: Building financial and non-financial incentives as outlined in [unicef/incentives](https://github.com/unicef/incentives), with a possible blockchain component.

6. **Integration**: Integration with other mapping tools from [Project Connect](https://projectconnect.world), which involve two separate workstreams in the backend and in the frontend. This is blocked by a more mature release of this application including **(1)**, **(2)**, **(3)** and **(4)**.

*Note: The roadmap has been created with [MermaidJS](https://mermaid-js.github.io/mermaid/#/). To update it, do the following:*
1. *Click on the SVG image above, which will open a live editor with the current version (content is encoded in the URL)*
2. *Once you have made the changes, copy the address link of the live editor and update the link above*
3. *On the live editor, click on the link to the SVG, look at the source, and update the [docs/roadmap.svg](docs/roadmap.svg) file*

## 💙 About UNICEF

[UNICEF](https://www.unicef.org/) works in over 190 countries and territories to protect the rights of every child. UNICEF has spent more than 70 years working to improve the lives of children and their families. In UNICEF, **we believe all children have a right to survive, thrive and fulfill their potential – to the benefit of a better world**.

## :memo: License

This software is licensed under the [GNU General Public License](LICENSE) as published by the Free Software Foundation, either version 3 of the License, or
any later version.

```
    ProjectConnect App
    Copyright (C) 2020 UNICEF

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
