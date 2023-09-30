<br />
<div align="center">
<h2 align="center">StreamTube</h2>
  <p align="center">
      StreamTube is a full-stack web application built using Next.js for the frontend, Node.js for the backend, and MongoDB for the database. This clone mimics the popular video-sharing platform StreamTube, allowing users to explore videos, subscribe to channels, and interact with content similar to the real StreamTube platform. With responsive design and dynamic content loading, it offers a seamless and engaging experience for users to enjoy videos and interact with their favorite channels.
    <br />
    <br />
    <a href="https://github.com/shivam6862/StreamTube/issues">Report Bug</a>
    ·
    <a href="https://github.com/shivam6862/StreamTube/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Description</a></li>
    <li><a href="#usage">Snapshot Gallery</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

StreamTube is a faithful reproduction of the StreamTube platform, allowing users to watch videos, discover trending content, and engage with various channels. Built on Next.js for the frontend, it offers a responsive and intuitive user interface, enabling smooth navigation across devices. Users can explore different categories, search for specific videos, and interact with their favorite content creators.

Team - `shivam6862`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [next-url]
- [NodeJs-url]
- [Mongodb-url]
- [VisualStudioCode-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

So as to run our project locally, you need to follow the steps below.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/shivam6862/StreamTube.git
   ```
2. Install NPM packages on frontend folders
   ```sh
   npm install
   ```
3. Enter your BACKEND URL in `.env` of frontend directory
   ```sh
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
   ```
4. Run the project in frontend using
   ```sh
   npm run dev
   ```
5. You can now view the project at `http://localhost:3000/`

6. Install NPM packages on Backend folders
   ```sh
   npm install
   ```
7. Enter your MONGODB DATABASE URL and put it in `.env` file in backend directory
   ```sh
   MONGODB_URL= "your mongodb url"
   ```
8. Make the database in your mongodb server named as `StreamTube` and make the following collection and set the data from `./Database/file`
   ```sh
   users
   ```
9. Run the project in backend using
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Description

StreamTube offers a dynamic and immersive video-sharing experience similar to YouTube. Users can browse videos by category, view trending content, and subscribe to channels. The application supports features like video playback, comments, likes, and user interactions. Its responsive design ensures a seamless experience on various devices, making it convenient for users to access their favorite videos anytime, anywhere.<br/>

<!--
### Home

The Home page serves as the central hub of our platform, providing users with a personalized and curated experience. Here, users can explore trending videos, recommended content based on their preferences, and the latest uploads from channels they subscribe to. The Home page is designed to engage users from the moment they land on our platform, offering a diverse range of videos tailored to their interests.

### Shorts

Our Shorts page is dedicated to short-form videos, catering to users who prefer quick and snappy content. This section is perfect for users on the go or those looking for bite-sized entertainment. Shorts are brief, engaging videos that cover a wide array of topics, ensuring there's something for everyone. Users can scroll through an endless stream of entertaining Shorts, making it an ideal destination for a quick dose of entertainment.

### Subscriptions

The Subscriptions page is where users can keep track of their favorite content creators. By subscribing to channels, users can stay updated on the latest uploads, live streams, and announcements from the creators they love. This page offers a curated feed of videos exclusively from subscribed channels, ensuring that users never miss out on new content from their preferred creators. It's a hub for loyal fans to connect with the channels they admire.

### Library

The Library page is a user's personal video library, where they can organize and manage their saved videos, playlists, and liked content. Users can create custom playlists, bookmark videos for later viewing, and access their liked videos—all in one convenient location. The Library serves as a user's content hub, allowing them to curate their own video collections and easily revisit their favorite videos whenever they want.

### History

The History page keeps track of a user's viewing activity. It displays a chronological list of videos the user has watched, making it easy to revisit content they've viewed recently. Users can use the History page to rediscover videos, resume watching from where they left off, or track their viewing habits over time. It's a handy tool for users who want to keep tabs on their video-watching journey.

### Your Videos

The Your Videos page is tailored for content creators. Here, creators can manage their uploaded videos, view analytics, and engage with their audience. Creators can track the performance of their videos, monitor viewer engagement, and gain insights into their channel's growth. It's a powerful dashboard that empowers creators to understand their audience better and optimize their content strategy.

### Watch Later

The Watch Later page is a user's curated playlist of videos they want to watch in the future. It's a convenient way to bookmark interesting videos without the pressure of watching them immediately. Users can add videos to Watch Later while browsing, ensuring they don't forget about content that piqued their interest. This feature encourages users to explore without the fear of missing out, allowing them to enjoy videos at their own pace.<br/>
These pages collectively create a rich and engaging user experience on our platform. Whether users are looking for quick entertainment, staying updated with their favorite channels, managing their video collections, or analyzing their content's performance, our platform offers a seamless and intuitive interface for all their needs. -->
<br/>

## Snapshot Gallery

<h2>Home Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/Home.png" style="border-radius:12px"></a>
<br/>
<h2>Shorts Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/Shorts.png" style="border-radius:12px"></a>
<br/>
<h2>Subscriptions Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/Subscriptions.png" style="border-radius:12px"></a>
<br/>
<h2>Library Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/Library.png" style="border-radius:12px"></a>
<br/>
<h2>History Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/History.png" style="border-radius:12px"></a>
<br/>
<h2>Channel Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/Channel.png" style="border-radius:12px"></a>
<h2>Watch Later Page</h2>
<a href="https://github.com/shivam6862/StreamTube"><img src="./image/WatchLater.png" style="border-radius:12px"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Linkedin - [@shivam-kumar](https://www.linkedin.com/in/shivam-kumar-14701b249/)

Project Link: [https://github.com/shivam6862/](https://github.com/shivam6862/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [MongoDb](https://www.mongodb.com/)

* []() Finally, kudos to the team for the great work `shivam6862`
<p align="right">(<a href="#readme-top">back to top</a>)</p>

[next-url]: https://nextjs.org/docs
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[nodejs-url]: https://nodejs.org/en
[mongodb-url]: https://www.mongodb.com/
[visualstudiocode-url]: https://code.visualstudio.com/
