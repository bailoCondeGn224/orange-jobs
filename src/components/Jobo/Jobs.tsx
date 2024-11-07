import React, { useState } from "react";
import "./Jobs.css";
import { FaSearch } from "react-icons/fa";
import { Pagination, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const jobTitles = [
  "Marketing",
  "Sécurité",
  "Conseil",
  "Client",
  "Finance",
  "Juridique",
  "IT",
  "Réseau",
  "RH",
];

const contractTypes = [
  "CDI",
  "Intérim",
  "Alternance",
  "Stage",
  "CDD",
  "Freelance",
];
const sites = ["Sur site", "Hybride", "A distance"];

const Jobs = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchText, setSearchText] = useState("");

  const CustomPagination = styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root": {
      "&.Mui-selected": {
        color: "white",
        backgroundColor: "black",
      },
    },
  }));
  return (
    <>
      <Header />
      <div className="globalContent">
        <div className="jobs">
          <div className="jobsContent">
            <div className="contentLeft">
              <div className="jobLeftContent">
                <div className="jobLeft">
                  <div className="filter">Filtre</div>
                  <div className="resetFilter">
                    Réinitialiser tous les filtres
                  </div>
                </div>
                <hr className="lineHr" />
                <div className="jobLeft1">
                  <div className="filterBy">Trier par:</div>
                  <div className="selectButton">
                    <select defaultValue="expirationDate">
                      <option value="expirationDate">Date d'expiration</option>
                      <option value="relevance">Pertinence</option>
                      <option value="newest">Plus récent</option>
                      <option value="oldest">Plus ancien</option>
                    </select>
                  </div>
                </div>
                <div className="jobsLeft2">
                  <div className="categorieTitle">Catégories</div>
                  <div className="optionButtons">
                    {jobTitles.map((title, index) => (
                      <label key={index}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="checkbox-label-text">{title}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="jobsLeft2">
                  <div className="categorieTitle">Type de contrat</div>
                  <div className="optionButtons">
                    {contractTypes.map((type, index) => (
                      <label key={index}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="checkbox-label-text">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="jobsLeft2">
                  <div className="categorieTitle">Sur sit/A distance</div>
                  <div className="optionButtons">
                    {sites.map((type, index) => (
                      <label key={index}>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="checkbox-label-text">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="jobRight">
              <div className="jobRight1">
                <div className="seachInputheadContentRight">
                  <FaSearch className="searchIcon" />
                  <input
                    type="search"
                    name="seach"
                    placeholder="Cherchez un poste. ex : Ingénieur, comptable ..."
                    id="seach"
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <div className="headContentRight1">
                  <select defaultValue="expirationDate">
                    <option value="expirationDate">Date d'expiration</option>
                    <option value="relevance">Pertinence</option>
                    <option value="newest">Plus récent</option>
                    <option value="oldest">Plus ancien</option>
                  </select>
                </div>
                <div className="buttonheadContentRight">
                  <button>Recherche</button>
                </div>
              </div>

              <div className="itemscontente">
                <div className="emploi">
                  <div>
                    <div className="titlejob">Emplois</div>
                  </div>
                  <div className="backSites">
                    <div className="sites">54</div>
                  </div>
                </div>

                {Array.from({ length: 6 }).map((_, index) => (
                  <React.Fragment key={index}>
                    <Link
                      to="/page-post"
                      state={{ from: "PagePost" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="contentItem">
                        <div className="itemContents">
                          <div className="item">
                            <div className="titleItem">
                              Développeur Full Stack
                            </div>
                            <div className="smallTitleitem">Conakry</div>
                          </div>
                          <div className="itemContent">
                            <div className="categorieSiteContrat">
                              <div className="backCdi">
                                <div className="cdi">CDI</div>
                              </div>
                              <div className="backSite">
                                <div className="site">Sur site</div>
                              </div>
                              <div className="backCandidature">
                                <div className="candidature">
                                  Date de candidature proche
                                </div>
                              </div>
                            </div>
                            <div className="itemContentText">
                              <p>
                                Dans le cadre de la refonte de sites web de nos
                                clients majeurs, l’entreprise a identifié Node
                                JS et Next JS/React JS comme étant les
                                technologies les plus adaptées pour certains
                                projets...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="paginateContent">
            <Stack spacing={2}>
              <CustomPagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;
