import React, { useState, useMemo, useEffect } from "react";
import "./FindTalent.css";
import { EHeader } from "../Components-Employer/EHeader";
import { Footer } from "../Components-LandingPage/Footer";
import time from "../assets/opportunity_time.png";
import experienceIcon from "../assets/opportunity_bag.png";
import place from "../assets/opportunity_location.png";

export const FindTalent = () => {
  const candidatesData = [
    {
      id: 1,
      name: "Shriram",
      role: "Fresher",
      experience: 0,
      location: "Coimbatore",
      workType: "Remote",
      education: "B.Tech",
      languages: ["English", "German"],
      skills: ["Python", "Java", "SQL"],
      updated: "2 days ago"
    },
    {
      id: 2,
      name: "Jay",
      role: "Full Stack Developer",
      experience: 8,
      location: "Coimbatore",
      workType: "Hybrid",
      education: "MCA",
      languages: ["English", "Spanish"],
      skills: ["Python", "React", "JavaScript"],
      updated: "2 days ago"
    },
    {
      id: 3,
      name: "Krishna Kumar",
      role: "Front End Developer",
      experience: 2,
      location: "Coimbatore",
      workType: "Work from office",
      education: "M.Tech",
      languages: ["English"],
      skills: ["React", "HTML", "CSS"],
      updated: "1 day ago"
    },
    {
      id: 4,
      name: "Sowmya",
      role: "Data Analyst",
      experience: 4,
      location: "Coimbatore",
      workType: "Remote",
      education: "B.Tech",
      languages: ["English", "German"],
      skills: ["Python", "SQL"],
      updated: "3 days ago"
    },
    {
      id: 5,
      name: "Arun",
      role: "Backend Developer",
      experience: 3,
      location: "Chennai",
      workType: "Work from office",
      education: "B.Tech",
      languages: ["English", "Tamil"],
      skills: ["Node.js", "Express", "MongoDB"],
      updated: "1 day ago"
    },
    {
      id: 6,
      name: "Meera",
      role: "UI/UX Designer",
      experience: 5,
      location: "Bangalore",
      workType: "Hybrid",
      education: "MCA",
      languages: ["English", "Hindi"],
      skills: ["Figma", "Adobe XD", "Sketch"],
      updated: "4 days ago"
    },
    {
      id: 7,
      name: "Vikram",
      role: "DevOps Engineer",
      experience: 6,
      location: "Hyderabad",
      workType: "Remote",
      education: "B.Tech",
      languages: ["English"],
      skills: ["Docker", "Kubernetes", "AWS"],
      updated: "5 days ago"
    }
  ];

  // STATES
  const [search, setSearch] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [maxExperience, setMaxExperience] = useState(10);
  const [visibleCount, setVisibleCount] = useState(3);

  // FILTER LOGIC
  const filteredCandidates = useMemo(() => {
    return candidatesData.filter((person) => {

      const matchesSearch =
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.skills.join(" ").toLowerCase().includes(search.toLowerCase());

      const matchesWorkType =
        selectedWorkType.length === 0 ||
        selectedWorkType.includes(person.workType);

      const matchesExperience =
        person.experience <= maxExperience;

      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.some(skill => person.skills.includes(skill));

      const matchesEducation =
        selectedEducation.length === 0 || selectedEducation.includes(person.education);

      const matchesLanguages =
        selectedLanguages.length === 0 ||
        selectedLanguages.some(lang => person.languages.includes(lang));

      return (
        matchesSearch && matchesWorkType && matchesExperience && matchesSkills && matchesEducation && matchesLanguages );
    });
  }, [
    search,
    selectedWorkType,
    selectedLanguages,
    selectedSkills,
    selectedEducation,
    maxExperience
  ]);

  // RESET visibleCount WHEN FILTER CHANGES
  useEffect(() => {
    setVisibleCount(3);
  }, [
    search,
    selectedWorkType,
    selectedLanguages,
    selectedSkills,
    selectedEducation,
    maxExperience
  ]);

  const toggleSelection = (value, stateSetter, currentState) => {
    stateSetter(
      currentState.includes(value)
        ? currentState.filter(item => item !== value)
        : [...currentState, value]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedWorkType([]);
    setSelectedLanguages([]);
    setSelectedSkills([]);
    setSelectedEducation([]);
    setMaxExperience(10);
  };

  // LOAD MORE FUNCTION
  const handleLoadMore = () => {
    if (visibleCount >= filteredCandidates.length) {
      setVisibleCount(3); 
    } else {
      setVisibleCount(prev => prev + 3); 
    }
  };

  return (
    <>
      <EHeader />

      <div className="ft-wrapper">

        <div className="ft-search">
          <input
            placeholder="Search by Skills or Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>

        <div className="ft-container">
          <h2 className="ft-title">Jobseekers based on your search</h2>

          <div className="ft-content">

            {/* SIDEBAR */}
            <div className="ft-sidebar">
              <div className="ft-filter-header">
                <span>Apply filters</span>
                <span className="clear" onClick={clearFilters}>
                  Clear filter
                </span>
              </div>

              {/* WORK TYPE */}
              <div className="ft-filter-group">
                <h5>Work Type</h5>
                {["Work from office", "Remote", "Hybrid"].map(type => (
                  <label key={type}>
                    <input
                      type="checkbox"
                      checked={selectedWorkType.includes(type)}
                      onChange={() =>toggleSelection(type, setSelectedWorkType, selectedWorkType)}
                    />
                    {type}
                  </label>
                ))}
              </div>

              {/* LANGUAGES */}
              <div className="ft-filter-group">
                <h5>Languages</h5>
                {["English", "Spanish", "German"].map(lang => (
                  <label key={lang}>
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(lang)}
                      onChange={() =>toggleSelection(lang, setSelectedLanguages, selectedLanguages)}
                    />
                    {lang}
                  </label>
                ))}
              </div>

              {/* EXPERIENCE */}
              <div className="ft-filter-group">
                <h5>Experience (0 - {maxExperience} yrs)</h5>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={maxExperience}
                  onChange={(e) => setMaxExperience(Number(e.target.value))}
                />
              </div>

              {/* EDUCATION */}
              <div className="ft-filter-group">
                <h5>Education</h5>
                {["B.Tech", "MCA", "M.Tech"].map(edu => (
                  <label key={edu}>
                    <input
                      type="checkbox"
                      checked={selectedEducation.includes(edu)}
                      onChange={() =>toggleSelection(edu, setSelectedEducation, selectedEducation)}
                    />
                    {edu}
                  </label>
                ))}
              </div>

              {/* SKILLS */}
              <div className="ft-filter-group">
                <h5>Skills</h5>
                {["Python", "Java", "JavaScript", "React", "HTML", "CSS", "SQL"].map(skill => (
                  <label key={skill}>
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={() =>
                        toggleSelection(skill, setSelectedSkills, selectedSkills)}
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>

            {/* CARDS */}
            <div className="ft-cards">

              {filteredCandidates.length === 0 && ( <p>No candidates found.</p>)}

              {filteredCandidates
                .slice(0, visibleCount)
                .map((person) => (
                  <div key={person.id} className="ft-card">

                    <div className="ft-card-left">
                      <h3>{person.name} <span className="role"> ({person.role})</span></h3>

                      <div className="ft-row"><img src={experienceIcon} alt="" />
                        <span>{person.experience} year(s)</span>
                        <img src={place} alt="" className="ml" />
                        <span>{person.location}</span>
                      </div>

                      <div className="ft-row">
                        <img src={time} alt="" />
                        <span>{person.workType}</span>
                      </div>

                      <div className="ft-row">
                        <span className="skill-label">Education:</span>
                        <span>{person.education}</span>
                      </div>

                      <div className="ft-row">
                        <span className="skill-label">Languages:</span>
                        <span>{person.languages.join(", ")}</span>
                      </div>

                      <div className="ft-row">
                        <span className="skill-label">Skills:</span>
                        <span>{person.skills.join(", ")}</span>
                      </div>

                      <p className="updated">
                        Resume updated: {person.updated}
                      </p>
                    </div>

                    <div className="ft-card-right">
                      <div className="profile-circle"></div>
                      <button className="save-btn">Save</button>
                      <button className="view-btn">View profile</button>
                    </div>
                  </div>
                ))}
              {filteredCandidates.length > 3 && (
                <div className="bottom-btn">
                  <button onClick={handleLoadMore}>
                    {visibleCount >= filteredCandidates.length ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
