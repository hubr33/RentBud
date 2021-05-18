import React, { Component } from "react";
import "../componentsStyles/ItemsAll.css";
import wertykulatorOskar from "../images/wertykulatorOscar.png";
import wertykulatorOAlko from "../images/wertykulatorAlko.png";
import scissors from "../images/scissors.jpg";
import karcher from "../images/karcher.jpg";
import glebogryzarka from "../images/glebogryzarka.jpg";

export class GardenItems extends Component {
  state = {
    time: new Date().toISOString().slice(0, 10),
    rentTimeFrom: "",
    rentTimeTo: "",
    selectedItem: "",
    gardenItems: [
      {
        id: 0,
        picture: wertykulatorOskar,
        brand: "Pubert Oscar 40H",
        item: "Wertykulator spalinowy",
        about:
          "Służy on do nacinania darni, dzięki czemu trawnik jest napowietrzony. Moc silnika: 5,5 KM, pojemność kosza: 50l, waga: 50 kg",
        price: "100zł/doba | Kaucja 500zł",
      },
      {
        id: 1,
        picture: wertykulatorOAlko,
        brand: "Al-ko",
        item: "Wertykulator spalinowy",
        about:
          "Służy on do nacinania darni, dzięki czemu trawnik jest napowietrzony. Moc silnika: 3,6 KM, pojemność kosza: 40l, waga: 35 kg",
        price: "100zł/doba | Kaucja 500zł",
      },
      {
        id: 2,
        picture: scissors,
        brand: "Stihl",
        item: "Nożyce spalinowe HS 45",
        about:
          "Wyjątkowo lekkie nożyce spalinowe, przeznaczone do pielęgncji żywopłotów w przydomowych ogrodach. Długość: 60cm",
        price: "70zł/doba | Kaucja 300zł",
      },
      {
        id: 3,
        picture: karcher,
        brand: "Kärcher",
        item: "URZĄDZENIE WYSOKOCIŚNIENIOWE HD 5/15 C",
        about:
          "Wydajność tłoczenia: 500l/h, ciśnienie robocze (bar/MPa): 150 / 15, lanca spryskująca: 840 mm, wąż wysokociśnieniowy, 10 m, DN 6, 250 barów ",
        price: "100zł/doba | Kaucja 500zł",
      },
      {
        id: 4,
        picture: glebogryzarka,
        brand: "HORTMASZ",
        item: "Glebogryzarka 6KM 45cm oraz 7KM 62cm",
        about:
          "Uzyskujemy dzięki temu lepsze spulchnienie i przemieszanie warstwy ornej gleby. Moc: 6.5 KM, szerokość robocza: 62 cm,ilość noży: 18, silnik: spalinowy",
        price: "130-180zł/doba | Kaucja 500zł",
      },
      {
        id: 5,
        picture: "",
        brand: "PODAC",
        item: "Kosiarka",
        about: "Napęd 5KM/51cm",
        price: "80zł/doba | Kaucja 300zł",
      },
      {
        id: 6,
        picture: "",
        brand: "PODAC",
        item: "Kosa spalinowa",
        about: "Napęd 3KM",
        price: "90zł/doba | Kaucja 300zł",
      },
      {
        id: 7,
        picture: "",
        brand: " NIE PODANO",
        item: "Przedłużacz na bębnie",
        about: "Rozmiary: 50m 3x2,5mm2",
        price: "20zł/doba | Kaucja 100zł",
      },
      {
        id: 8,
        picture: "",
        brand: " NIE PODANO",
        item: "Wał do trawy",
        about: "Rozmiary: 80cm",
        price: "30zł/doba | Kaucja 100zł",
      },
    ],
  };

  handleOpenRent = (e) => {
    const orderBtn = document.querySelector(".buildRentButton");
    const shadow = document.querySelector(".buildingItemsShadow");
    shadow.classList.add("active");
    if (orderBtn) {
      const getID = e.target.parentElement.id;
      console.log(this.state.selectedItem);
      this.setState({ selectedItem: this.state.gardenItems[getID].item });
    } else {
      return null;
    }
  };

  handleCloseRent = () => {
    const error = document.querySelector(".errorFromToRent");
    const shadow = document.querySelector(".buildingItemsShadow");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    shadow.classList.remove("active");
    error.classList.remove("active");
    dateFrom.value = "";
    dateTo.value = "";
  };

  handleGetInputValue = () => {
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    this.setState({ rentTimeFrom: dateFrom.value, rentTimeTo: dateTo.value });
  };

  handleSubmitOrder = () => {
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const error = document.querySelector(".errorFromToRent");
    if ((this.state.rentTimeTo !== "") & (this.state.rentTimeFrom !== "")) {
      const shadow = document.querySelector(".buildingItemsShadow");
      shadow.classList.remove("active");
      error.classList.remove("active");
      this.setState({ rentTimeFrom: "", rentTimeTo: "" });
      dateFrom.value = "";
      dateTo.value = "";
    } else {
      error.classList.add("active");
    }
  };

  render() {
    return (
      <section className="buildingItems">
        {/* <div className="buildingItemsShadow">
          <h2>Wynajem</h2>
          <div className="rentOptions">
            <button className="closeShadow" onClick={this.handleCloseRent}>
              Zamknij
            </button>
            <div className="rentItem">
              <h3>Wybrany przedmiot</h3>
              <p>{this.state.selectedItem}</p>
            </div>
            <div className="rentPeriod">
              <div className="rentFrom">
                <p>Wynajem od</p>
                <input
                  id="dateFrom"
                  onChange={this.handleGetInputValue}
                  type="date"
                  min={this.state.time}
                />
              </div>
              <div className="rentTo">
                <p>Wynajem do</p>
                <input
                  id="dateTo"
                  onChange={this.handleGetInputValue}
                  type="date"
                  min={this.state.time}
                />
              </div>
            </div>
            <p className="errorFromToRent">Wybierz date wynajmu</p>
            <button onClick={this.handleSubmitOrder} className="applyOrder">
              Złóż zamówienie
            </button>
          </div>
        </div> */}
        <div className="buildingItemsContainer">
          <h2>Nasz sprzęt ogrodniczy</h2>
          <div className="buildItemContainer">
            {this.state.gardenItems.map((gardenItem) => (
              <div
                key={gardenItem}
                id={gardenItem.id}
                className="buildItemCreate"
              >
                <div className="buildImg">
                  <img src={gardenItem.picture} alt="" />
                </div>
                <div className="buildText">
                  <p>
                    Marka <h4>{gardenItem.brand}</h4>
                  </p>
                  <p>
                    Przedmiot <h4>{gardenItem.item}</h4>
                  </p>
                  <p>
                    Opis <h4>{gardenItem.about}</h4>
                  </p>
                  <p className="price">{gardenItem.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
