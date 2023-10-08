type DataType = "globe" | "orbit" | "solar";
export class Data {
  static eyebrow(type: DataType) {
    switch (type) {
      case "globe":
        return "A Day in the Life";
      case "orbit":
        return "Our Nearby Neighbors";
      case "solar":
        return "Soaring Through Space";
    }
  }

  static heading(type: DataType) {
    switch (type) {
      case "globe":
        return "Planet Earth";
      case "orbit":
        return "Objects in Orbit";
      case "solar":
        return "The Solar System";
    }
  }

  static abstract(type: DataType) {
    switch (type) {
      case "globe":
        return "A lot goes into making a day happen on Planet Earth! Discover how our globe turns and tilts to give us hot summer days, chilly autumn nights, and more.";
      case "orbit":
        return "Get up close with different types of orbits to learn more about how satellites and other objects move in space relative to the Earth.";
      case "solar":
        return "Take a trip to the solar system and watch how the Earth, Moon, and its satellites are in constant motion rotating around the Sun.";
    }
  }

  static overview(type: DataType) {
    switch (type) {
      case "globe":
        return "You can’t feel it, but Earth is constantly in motion. All planets spin on an invisible axis: ours makes one full turn every 24 hours, bringing days and nights to our home.\n\nWhen your part of the world faces the Sun, it’s daytime; when it rotates away, we move into night. When you see a sunrise or sunset, you’re witnessing the Earth in motion.\n\nWant to explore Earth’s rotation and axial tilt? Check out our interactive 3D globe and be hands-on with Earth’s movements.";
      case "orbit":
        return "The Moon orbits the Earth in an elliptical orbit. It’s the most visible object in our sky, but it’s farther from us than you might think: on average, it's about 385,000 kilometers away!\n\nMost satellites orbit Earth in a tighter orbit — some only a few hundred miles above Earth’s surface. Satellites in lower orbits circle us faster: the Hubble Telescope is approximately 534 kilometers from Earth and completes almost 15 orbits in a day, while geostationary satellites circle Earth just once in 24 hours from about 36,000 kilometers away.\n\nGet up close with different types of orbits to learn how these objects move in space relative to Earth.";
      case "solar":
        return "Every 365¼ days, Earth and its satellites completely orbit the Sun — the star that anchors our solar system. It’s a journey of about 940 million kilometers a year!\n\nOn its journey, the Earth moves counter-clockwise in a slightly elliptical orbit. It travels a path called the ecliptic plane — an important part of how we navigate through our solar system.\n\nWant to explore Earth’s orbit in detail? Take a trip to the solar system and watch how Earth and its satellites move around the Sun.";
    }
  }

  static callToAction(type: DataType) {
    switch (type) {
      case "globe":
        return "View Globe";
      case "orbit":
        return "View Orbits";
      case "solar":
        return "View Outer Space";
    }
  }

  static funFacts = [
    "The Earth orbits the Sun on an invisible path called the ecliptic plane.",
    "All planets in the solar system orbit within 3°–7° of this plane.",
    "As the Earth orbits the Sun, its axial tilt exposes one hemisphere to more sunlight for half of the year.",
    "Earth's axial tilt is why different hemispheres experience different seasons.",
  ];
}