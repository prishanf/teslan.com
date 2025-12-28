/**
 * SAMPLE DATA FOR TESTING
 * 
 * To use: Uncomment the loadSampleData() call at the bottom of this file
 * To disable: Comment out the loadSampleData() call
 * 
 * This file contains sample data to pre-fill the rental application form
 * for testing purposes.
 */

const sampleData = {
    // Property Information
    property_address: "10488 138A St, Surrey, BC V3T 4L3",
    move_in_date: "2026-02",
    lease_term: "2",

    // Primary Applicant Personal Information
    full_name: "John Michael Smith",
    birthdate: "1985-06-15",
    marital_status: "Married",
    phone: "778-233-0176",
    cell: "604-555-1234",
    email: "john.smith@email.com",
    license: "DL12345678",
    license_province: "BC",

    // Current Residence
    current_address: "123 Main Street, Apt 4B",
    current_city: "Vancouver",
    current_province: "BC",
    current_postal: "V6B 1A1",
    current_landlord: "ABC Property Management",
    current_landlord_phone: "604-555-0100",
    current_rent: "1850",
    current_start: "2020-03-01",
    current_end: "2026-01-31",
    reason_leaving: "Looking for larger space closer to work",

    // Previous Address #1
    prev_address_1: "456 Oak Avenue",
    prev_city_1: "Burnaby",
    prev_province_1: "BC",
    prev_postal_1: "V5H 2K3",
    prev_landlord_1: "Jane Doe",
    prev_landlord_phone_1: "604-555-0200",
    prev_rent_1: "1650",
    prev_start_1: "2017-05-01",
    prev_end_1: "2020-02-28",

    // Previous Address #2
    prev_address_2: "789 Pine Street, Unit 12",
    prev_city_2: "Richmond",
    prev_province_2: "BC",
    prev_postal_2: "V7E 3M5",
    prev_landlord_2: "XYZ Rentals Inc.",
    prev_landlord_phone_2: "604-555-0300",
    prev_rent_2: "1500",
    prev_start_2: "2014-08-01",
    prev_end_2: "2017-04-30",

    // Current Employment
    employer: "Tech Solutions Inc.",
    occupation: "Software Engineer",
    employer_address: "1000 Tech Boulevard, Vancouver, BC V6B 2C3",
    supervisor: "Sarah Johnson",
    employer_phone: "604-555-0400",
    employment_start: "2019-03",
    monthly_income: "7500",
    employment_type: "Full-Time",

    // Previous Employment
    prev_employer: "Digital Innovations Ltd.",
    prev_occupation: "Junior Developer",
    prev_employer_phone: "604-555-0500",
    prev_employment_start: "2016-06",
    prev_employment_end: "2019-02",

    // Additional Income
    other_income_source: "Investment dividends",
    other_income_amount: "500",

    // Vehicle Information
    vehicle_owned: "yes",
    vehicle_make: "Honda Civic",
    vehicle_year: "2020",
    vehicle_plate: "ABC 123",

    // Spouse/Co-Applicant
    spouse_name: "Jane Marie Smith",
    spouse_dob: "1987-09-22",
    spouse_phone: "778-233-0177",
    spouse_email: "jane.smith@email.com",
    spouse_employer: "Healthcare Services BC",
    spouse_occupation: "Registered Nurse",
    spouse_employer_phone: "604-555-0600",
    spouse_income: "6200",

    // Other Occupants
    num_adults: "0",
    num_children: "2",
    occupant1_name: "Emily Smith",
    occupant1_relationship: "Daughter",
    occupant1_age: "8",
    occupant2_name: "Michael Smith",
    occupant2_relationship: "Son",
    occupant2_age: "5",
    occupant3_name: "",
    occupant3_relationship: "",
    occupant3_age: "",

    // Pets & Smoking
    pets: "yes",
    pet_details: "1 dog - Golden Retriever, 3 years old, 65 lbs, well-trained and housebroken",
    smokers: "no",

    // Emergency Contact
    emergency_name: "Robert Anderson",
    emergency_relationship: "Brother",
    emergency_phone: "604-555-0700",
    emergency_alt_phone: "778-555-0800",

    // References
    ref1_name: "David Chen",
    ref1_relationship: "Former Colleague",
    ref1_phone: "604-555-0900",
    ref1_email: "david.chen@email.com",

    ref2_name: "Lisa Williams",
    ref2_relationship: "Friend",
    ref2_phone: "604-555-1000",
    ref2_email: "lisa.williams@email.com",

    ref3_name: "Mark Thompson",
    ref3_relationship: "Former Neighbor",
    ref3_phone: "604-555-1100",
    ref3_email: "mark.thompson@email.com",

    // Additional Questions
    evicted: "no",
    evicted_explanation: "",
    broken_lease: "no",
    broken_lease_explanation: "",
    bankruptcy: "no",
    bankruptcy_details: "",
    criminal: "no",
    criminal_explanation: "",
    insurance: "yes",

    // Additional Information
    additional_info: "We are a responsible family looking for a long-term rental. We have excellent rental history and references. Both of us have stable employment and good credit scores.",

    // Signatures
    primary_signature_name: "John Michael Smith",
    primary_typed_signature: "John Michael Smith",
    primary_signature_date: new Date().toISOString().split('T')[0], // Today's date

    co_signature_name: "Jane Marie Smith",
    co_typed_signature: "Jane Marie Smith",
    co_signature_date: new Date().toISOString().split('T')[0] // Today's date
};

// Radio button values (name: value pairs)
const sampleRadioData = {
    vehicle_owned: "yes",
    pets: "yes",
    smokers: "no",
    evicted: "no",
    broken_lease: "no",
    bankruptcy: "no",
    criminal: "no",
    insurance: "yes"
};

/**
 * Function to load sample data into the form
 */
function loadSampleData() {
    console.log("Loading sample data...");

    // Fill text inputs, textareas, and selects
    Object.keys(sampleData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'TEXTAREA' || element.type === 'text' || 
                element.type === 'email' || element.type === 'tel' || 
                element.type === 'number' || element.type === 'date' || 
                element.type === 'month') {
                element.value = sampleData[key];
            }
        }
    });

    // Fill radio buttons
    Object.keys(sampleRadioData).forEach(name => {
        const radios = document.querySelectorAll(`input[name="${name}"][value="${sampleRadioData[name]}"]`);
        if (radios.length > 0) {
            radios[0].checked = true;
        }
    });

    // Trigger change events to ensure form validation works
    Object.keys(sampleData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.dispatchEvent(new Event('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

    console.log("Sample data loaded successfully!");
}

// Uncomment the line below to automatically load sample data when the page loads
// window.addEventListener('DOMContentLoaded', loadSampleData);

// Or use one of these methods:
// 1. Click the "Load Sample Data" button on the form
// 2. Call manually from browser console: loadSampleData()

