/* eslint-disable no-unused-vars */
// resumeState.js

import { useState } from 'react';

export const Functionality = () => {
  const [showHeaderSaveBtn, setShowHeaderSaveBtn] = useState(true);
  const [showEditHeaderBtn, setShowEditHeaderBtn] = useState(false);
  const [headerFilledStatus, setHeaderFilledStatus] = useState(false);
  const [summaryStatus, setSummaryStatus] = useState(false);
  const [summaryFilledStatus, setSummaryFilledStatus] = useState('');

  const [header, setHeader] = useState({
    name: '',
    surname: '',
    designation: '',
    cell: '',
    email: '',
    address: ''
  });

  const [summary, setSummary] = useState('');

  const [eduSect, setEduSect] = useState({
    institute1: '',
    degree1: '',
    yearfrom1: '',
    yearto1: ''
  });

  const [proExpSect, setProExpSect] = useState({
    designation1: '',
    company1: '',
    yearfrom1: '',
    yearto1: '',
    responsibilities1: ''
  });

  const [newEducationSection, setNewEducationSection] = useState({
    institute2: '',
    degree2: '',
    yearfrom2: '',
    yearto2: ''
  });

  const [newProExpSection, setNewProExpSection] = useState({
    designation2: '',
    company2: '',
    yearfrom2: '',
    yearto2: '',
    responsibilities2: ''
  });

  const handleSummaryChange = (e) => {
    setSummary(() => e.target.value);
  };

  const handleEduSectChange = (e) => {
    const { name, value } = e.target;
    setEduSect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleProExpSectChange = (e) => {
    const { name, value } = e.target;
  
    setProExpSect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
};

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeader({
      ...header,
      [name]: value,
    });
  };

  const isAlphabetic = (value) => /^[A-Za-z]+$/.test(value);
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // const isNumeric = (value) => /^[0-9]+$/.test(value) && !/\s/.test(value) && !/^[A-Za-z]/.test(value);
  const isNumeric = (value) => /^[0-9]+$/.test(value) && !/\s/.test(value) && !/[A-Za-z]/.test(value) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const hasSpecialCharacters = (value) => !/^[a-zA-Z0-9]+$/.test(value);


  const saveHeader = () => {
    if (
      header.name.length >= 3 &&
      header.name.length <= 18 &&
      header.surname.length >= 3 &&
      header.surname.length <= 8 &&
      header.designation.length >= 6 &&
      header.designation.length <= 30 &&
      isNumeric(header.cell) &&
      header.cell.length >= 11 &&
      header.cell.length <= 14 &&
      isEmailValid(header.email) &&
      header.email.length >= 5 &&
      header.email.length <= 50 &&
      header.address.length >= 10 &&
      header.address.length <= 50
    ) {
      setShowHeaderSaveBtn(false);
      setHeaderFilledStatus(false);
      setShowEditHeaderBtn(true);
    } else {
      setHeaderFilledStatus(true);
    }
  };

  const saveSummary = () => {
    if (summary.length === 0) {
      setSummaryFilledStatus('Empty');
    } else if (summary.length < 100) {
      setSummaryFilledStatus('Less');
    } else if (summary.length > 350) {
      setSummaryFilledStatus('More');
    } else {
      setSummaryFilledStatus('');
      setSummaryStatus(true);
    }
  };

  // Add other functions and variables as needed

  return {
    showHeaderSaveBtn,
    showEditHeaderBtn,
    headerFilledStatus,
    summaryStatus,
    summaryFilledStatus,
    header,
    summary,
    eduSect,
    proExpSect,
    newEducationSection,
    newProExpSection,
    handleSummaryChange,
    handleEduSectChange,
    handleProExpSectChange,
    handleHeaderChange,
    isNumeric,
    isEmailValid,
    saveHeader,
    saveSummary,
    setShowEditHeaderBtn,
    setShowHeaderSaveBtn,
    setSummaryStatus,
    setSummaryFilledStatus,
  };
};
