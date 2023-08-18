function RescueBox(){
    return(
            <div className="">
            
                <form action="" className="">

                <p className="">Rescuer Information</p>

                    <div className="form-group">
                        <label htmlFor="organisation" className="">Organisation</label>
                        <input type="text" name="organisation" id="organisation" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstname" className="">Firstname</label>
                        <input type="text" name="firstname" id="firstname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname" className="">Surname</label>
                        <input type="text" name="surname" id="surname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact" className="">Contact</label>
                        <input type="text" name="contact" id="contact" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="street-name" className="">Street name</label>
                        <input type="text" name="street-name" id="street-name" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="city" className="">City</label>
                        <input type="text" name="reascityon" id="city" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postcode" className="">Postcode</label>
                        <input type="text" name="postcode" id="postcode" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="rescue-care" className="">Notes from rescuer</label>
                        <input type="text" name="rescue-care" id="rescue-care" />
                    </div>


                <p className="">Treatment Information</p>

                    <div className="form-group">
                        <label htmlFor="transported-by" className="">Transported By</label>
                        <input type="text" name="transported-by" id="transported-by" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="street-name" className="">Street name</label>
                        <input type="text" name="street-name" id="street-name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reason" className="">Reason for admission</label>
                        <input type="text" name="reason" id="reason" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city" className="">City</label>
                        <input type="text" name="reascityon" id="city" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postcode" className="">Postcode</label>
                        <input type="text" name="postcode" id="postcode" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rescue-care" className="">Care from rescuer</label>
                        <input type="text" name="rescue-care" id="rescue-care" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes-treatment" className="">Notes on Treatment</label>
                        <input type="text" name="notes-treatment" id="notes-treatment" />
                    </div>

                    <button type="submit">Cancel</button>
                    <button type="submit">Finalise</button>
                   
                </form>

            </div>
        )
    }
    export default RescueBox;