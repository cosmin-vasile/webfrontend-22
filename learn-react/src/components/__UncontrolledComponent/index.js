import { useEffect, useRef } from "react";

const UncontrolledComponent = () => {
    const inputRef = useRef();

    return (
        <form onSubmit={this.handleSubmit}>
            <label>
            First Name: <input type="text" ref={this.input} />
            </label>
            <label>
            Last Name: <input type="text" ref={this.input} />
            </label>
            <label>
            Email Address: <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
      </form>
    );
};

export default UncontrolledComponent;