# How to get the app and run on your local server

* Download zip of the code or git clone the application

* Extract zip or open the clonned folder

* Open the terminal

* `CD` into the directory of the downloaded or clonned app

* Run `npm i` to install the dependencies

* Run `npm run dev` to start the server

> **Note:** Since the app relies on a remote server, images may occasionally fail to load or appear damaged. In such cases, please refresh the page to load the images again.


# Image Slider

## Introduction

Designed with elegance in mind, this project showcases a clean,
visually appealing, and fully responsive layout tailored for an image
carousel interface. This image slider web application has a single
page, which displays a series of images in a visually appealing way.
Also it has some accessibility support. In this document we’ll take a
closer look at the distinctive features offered by this interactive image
slider.

It has a main **section container** which includes:

- Wrapper for an **images** - slider
- **Navigation Buttons** for Slide Transition
  - **Previous**
  - **Next**
  - **Dot Buttons**
    - Provides **feedback** to users about their **current**
          **position**

Looking visually appealing, it is also **responsive** for:

- **Desktop**
- **Tablets**
- **Mobiles**

From the perspective of **animations, transitions** occur with smooth
and pleasing effects for the:

- **Images**
- **Navigation buttons**
- **Dot buttons**

In terms of **functionality** it allows:


- Multiple ways to **navigate** through the images

With respect to accessibility, it has support of:

- Using **Keyboard**
- Alternative **texts** to describe images


## Techniques / Tools

Now, let’s take a closer look at the tools and techniques
implemented to overcome this challenge. Considering that the whole
application relies on the **React.JS** library; Images are coming from the
remote source of **picsum.photos** API, I’ll go over the core features of
the Image Carousel project.

**Slider Images** :

- Images are pulled from the remote source of **picsum.photos**
    API, so that the every (five) random images is generated **freshly**
    every time the page is refreshed or loaded.
- Please **note** that since the app relies on a remote server, images
    may occasionally fail to load or appear damaged. In such cases,
    the user can refresh the page to load the images again.

**Slider Navigation Buttons:**

- **Previous**
  - Flows to the left. Once the first image is reached, loops
       back to the last.
- **Next**
  - Flows to the right. Once the last image is reached, loops
       back to the first.
- **Dot Buttons**
  - **Display**
    - Dots are displayed in the same quantity as the images,
          one of them having inner dot to indicate the current
          slide's position.
  - **Function**
    - Clicking on any of the dot will navigate the slider to the
          corresponding position.


**Automatic Slideshow:**

- The slider is **automatically transitioning** to the next image
    after every 3 seconds (using javascript’s setInterval
    function).

**Keyboard accessibility:**

The Sliding function is also possible by choosing the next button
with pressing the “ **Tab** ” key and choosing the previous button with
pressing the “ **Shift+Tab** ” keys and pressing “ **Enter** ” or “ **Space** ” on the
selected button to perform the action. It will also highlight the focused
button with a neat outline.

**Additional Keys** for navigation**:**

- **Arrow Left**
  - Functionality of the Previous button
- **Arrow Right**
  - Functionality of the Next button

**Responsiveness:**

- **Desktop (up from 810px)**
- **Tablets (up to 810px)**
- **Mobiles (up to 390px)**


## Output / Results

For this Interactive Image Slider project assignment, I’ve
designed and built a functional Image Carousel. The project
successfully provides a fully functional and user-friendly Image Slider,
fulfilling all the defined goals with key features fully implemented and
ensuring a seamless and intuitive user experience that is easy to
navigate. Key results include:

- The project is built using the **React.JS** library
- Images are coming from **picsum.photos** API
- Various techniques are used to handle **image sliding**
- Smooth **transitions** and **animations** across various features
- **Auto-transitioning** slideshow
- Device-friendly **adaptability**
- **Responsiveness**
  - The application adjusts smoothly, adapting seamlessly to
       various screen sizes.



