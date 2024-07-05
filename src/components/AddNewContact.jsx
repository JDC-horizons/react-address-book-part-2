function AddNewContact(props) {
  return (
    <div id="add-new-contact">
      <h1>Create Contact</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <br></br>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <br></br>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <br></br>
          <input type="text" id="street" name="street" />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <br></br>
          <input type="text" id="city" name="city" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddNewContact;
