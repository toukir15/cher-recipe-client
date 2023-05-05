import Header from "../shared/Header/Header";

export default function Blog() {
  return (
    <div>
      <div className="text-black bg-black">
        <Header />
      </div>

      <div className="container mx-auto my-32 px-4">
        <div className="mb-4">
          <p className="text-xl font-medium">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </p>
          <p className="pl-4">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-medium">
            2. How to validate React props using PropTypes?
          </p>
          <p className="pl-4">
            Here's a step-by-step process for validating React props using
            PropTypes:
            <br />
            * Import the PropTypes module from the 'prop-types' package.
            <br />
            * Define the PropTypes for your component by setting the propTypes
            static property on your component class.
            <br />
            * Use the defined PropTypes in your component by accessing them
            through the this.props object.
            <br />
            That's it! By setting the propTypes static property on your
            component class, you can define the expected types for your props.
            When you access the props in your component, PropTypes will
            automatically validate them and print a warning in the console if
            they don't match the expected type.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-medium">
            3. Tell us the difference between nodejs and express js.
          </p>
          <p className="pl-4">
            NodeJS is the package, which provides the JavaScript run-time
            environment, whereas Express is a framework that sits on top of
            NodeJS and helps us to handle requests and responses.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-medium">
            4. What is a custom hook, and why will you create a custom hook?
          </p>
          <p className="pl-4">
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
    </div>
  );
}
