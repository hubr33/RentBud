import React, { Component } from "react";
import "../componentsStyles/ItemsAll.css";
import zacieraczka from "../images/zacieraczka.jpg";
import rebak from "../images/rebak.jpg";
import przecinarka from "../images/przecinarka.jpg";
import osusacz from "../images/osusacz.jpg";
import osusaczBudowlany from "../images/osusaczBudowlany.jpg";
import osusaczBudowlanyMaster from "../images/osusaczBudowlanyMaster.jpg";
import pilarka from "../images/pilarka.jpg";
import udar from "../images/udar.jpg";
import szlifierka from "../images/szlifierka.jpg";
import generator from "../images/generator.png";
import wiertnica from "../images/wiertnica.jpg";
import karcher from "../images/karcher.jpg";
import glebogryzarka from "../images/glebogryzarka.jpg";

export class BuildingItems extends Component {
  state = {
    time: new Date().toISOString().slice(0, 10),
    rentTimeFrom: "",
    rentTimeTo: "",
    selectedItem: "",
    buildingItems: [
      {
        id: 0,
        picture: zacieraczka,
        brand: "LUMAG",
        item: "Zacieraczka",
        about:
          "Średnica zacierania 800 mm, 4-suwowy silnik o mocy 4,8 kW, jedno pokrętło regulujące wysokość pracy. Dodatkowo talerz.",
        price: "150-200zł/doba + talerz | Kaucja 500zł",
      },
      {
        id: 1,
        picture: rebak,
        brand: "Red Dragon RTS-630",
        item: "Rębak tarczowy",
        about:
          "Silnik spalinowy 15 KM, 4-SUW, wielokość zrębki 20-50mm, średnica tarczy 620mm",
        price: "300zł/doba | Kaucja 900zł",
      },
      {
        id: 2,
        picture: przecinarka,
        brand: "Husqvarna K-770",
        item: "Przecinarka",
        about:
          "Średnica tarczy, max. 350mm, Głębokość cięcia, max. 125mm, moc 3.7 kW",
        price: "140zł/doba | Kaucja 700zł",
      },
      {
        id: 3,
        picture: osusacz,
        brand: "TROTEC",
        item: "Osuszacz powietrza TTK 350 S",
        about:
          "Moc osuszania: 70l/24h, zalecana wielkość pomieszczenia: 180m². Obieg powietrza 450 m3/h. Pojemnik: 6l, Moc silnika 1.07 kW",
        price: "70zł/doba | Kaucja 500zł",
      },
      {
        id: 4,
        picture: osusaczBudowlany,
        brand: "SCHEPPACH",
        item: "Osuszacz budowlany DH6000",
        about:
          "Moc osuszania: 60l/24h. Zalecana wielkość pomieszczenia: 60-80m². Obieg powietrza 350 m3/h. Pojemnik: 6l, Moc silnika 1.15 kW",
        price: "60zł/doba | Kaucja 500zł",
      },
      {
        id: 5,
        picture: osusaczBudowlanyMaster,
        brand: "MASTER",
        item: "Osusacz budowlany DH-732",
        about:
          "Moc osuszania: 35l/24h, maks. 70l/24h, zalecana wielkość pomieszczenia: 25m². Obieg powietrza 160 m3/h. Pojemnik: 6.5l, Moc silnika 0.68 kW",
        price: "50zł/doba | Kaucja 500zł",
      },
      {
        id: 6,
        picture: pilarka,
        brand: "Stihl",
        item: "Piła spalinowa do drewna",
        about:
          "Moc 2,2 kW / 3,0 KM, silnik 2-MIX, boczny napinacz piły łańcuchowej. Optymalna do pozyskiwania drewna opałowego przez użytkownika okazjonalnego ale również rolników, sadowników, ogrodników i plantatorów.",
        price: "120zł/doba | Kaucja 400zł",
      },
      {
        id: 7,
        picture: udar,
        brand: "GRAPHITE",
        item: "Młot wyburzeniowy 18kg",
        about:
          "Moc uderzeniowa: 45J, Moc pobierana: 1700W, typ udaru: pneumatyczny",
        price: "100zł/doba | Kaucja 300zł",
      },
      {
        id: 8,
        picture: szlifierka,
        brand: "GRAPHITE",
        item: "Szlifierka kątowa PRO 59GP004",
        about:
          "Moc: 2400W, zasilanie 230V/50Hz, prędkość obrotowa: 6500 obr./min, maksymalna średnica tarczy: 230mm",
        price: "40zł/doba | Kaucja 200zł",
      },
      {
        id: 9,
        picture: generator,
        brand: "Könner & Söhnen",
        item: "Agregat prądotwórczy",
        about:
          "Moc maks: 3 kW, moc nominalna: 2.6 kW, moc silnika: 7 KM, paliwo: benzyna, Czas pracy bez tankowania przy 50%:	15 godzin, pojemność zbiornika paliwa: 15l",
        price: "80zł/doba | Kaucja 400zł",
      },
      {
        id: 10,
        picture: wiertnica,
        brand: "LUMAG",
        item: "Wiertnica spalinowa 1os-3KM, 2os-4KM",
        about:
          "Moc silnika: 3/4 KM, paliwo: benzyna, długość wiertła: 910mm, średnica wiertła: 250mm, zbiornika paliwa: 0.55l",
        price: "100-150zł/doba | Kaucja 300-500zł",
      },
      {
        id: 11,
        picture: karcher,
        brand: "Kärcher",
        item: "Urządzenie wysokociśnieniowe HD 5/15 C",
        about:
          "Wydajność tłoczenia: 500l/h, Ciśnienie robocze (bar/MPa): 200, lanca spryskująca: 840 mm, wąż wysokociśnieniowy, 10 m, DN 6, 250 barów ",
        price: "100zł/doba | Kaucja 500zł",
      },
      {
        id: 12,
        picture: glebogryzarka,
        brand: "HORTMASZ",
        item: "Glebogryzarka 6KM 45cm oraz 7KM 62cm",
        about:
          "Uzyskujemy dzięki temu lepsze spulchnienie i przemieszanie warstwy ornej gleby. Moc: 6.5 KM, szerokość robocza: 62 cm,ilość noży: 18, silnik: spalinowy",
        price: "130-180zł/doba | Kaucja 500zł",
      },
      {
        id: 13,
        picture: "",
        brand: " PODAC ",
        item: "Zagęszczarka 110kg",
        about: "",
        price: "110zł/doba | Kaucja 400zł",
      },
      {
        id: 14,
        picture: "",
        brand: " PODAC ",
        item: "Zagęszczarka 65kg",
        about: "",
        price: "70zł/doba | Kaucja 400zł",
      },
      {
        id: 15,
        picture: "",
        brand: " PODAC ",
        item: "Zagęszczarka 75kg 'Skoczek' ",
        about: "",
        price: "110zł/doba | Kaucja 500zł",
      },
      {
        id: 16,
        picture: "",
        brand: "STIHL",
        item: "Kask STIHL z nausznikami",
        about: "",
        price: "20zł/doba | Kaucja 100zł",
      },
      {
        id: 17,
        picture: "",
        brand: " NIE PODANO",
        item: "Młotowiertarka",
        about: "Moc uderzeniowa młotowiertarki: 3.2kJ",
        price: "40zł/doba | Kaucja 200zł",
      },
      {
        id: 18,
        picture: "",
        brand: " NIE PODANO",
        item: "Przedłużacz na bębnie",
        about: "Rozmiary: 50m 3x2,5mm2",
        price: "20zł/doba | Kaucja 100zł",
      },
      {
        id: 19,
        picture: "",
        brand: " NIE PODANO",
        item: "Ozonator 15g/h oraz 10g/h",
        about: "",
        price: "40-50zł/doba | Kaucja 300zł",
      },
      {
        id: 20,
        picture: "",
        brand: " NIE PODANO",
        item: "Hydronetka do przecinarki",
        about: "Pojemność: 10l",
        price: "20zł/doba | Kaucja 100zł",
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
      this.setState({ selectedItem: this.state.buildingItems[getID].item });
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
          <h2>Nasz sprzęt budowlany</h2>
          <div className="buildItemContainer">
            {this.state.buildingItems.map((buildingItem) => (
              <div
                key={buildingItem}
                id={buildingItem.id}
                className="buildItemCreate"
              >
                <div key={buildingItem} className="buildImg">
                  <img key={buildingItem} src={buildingItem.picture} alt="" />
                </div>
                <div key={buildingItem} className="buildText">
                  <p>
                    Marka <h4 key={buildingItem}>{buildingItem.brand}</h4>
                  </p>
                  <p>
                    Przedmiot <h4 key={buildingItem}>{buildingItem.item}</h4>
                  </p>
                  <p>
                    Opis <h4 key={buildingItem}>{buildingItem.about}</h4>
                  </p>
                  <p className="price">{buildingItem.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
