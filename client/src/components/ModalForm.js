import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Rodal from "rodal";
// include styles
import "rodal/lib/rodal.css";
import { addTodo } from "../actions";

class ModalForm extends React.Component {
  renderInput = ({ input, meta, label }) => {
    const inputClassName =
      "px-2 py-1 foucs:ring focus:ring-1 font-semibold text-gray-400 transition focus:ring-yellow-300 shadow-sm focus:outline-none border rounded-lg border-yellow-300 ";
    const labelClassName = "text-base font-semibold text-gray-600 mb-4";
    return (
      <>
        <label htmlFor="" className={labelClassName}>
          {label}
        </label>
        <input
          type="text"
          {...input}
          autoComplete="off"
          className={inputClassName}
        />
      </>
    );
  };
  onSubmit = (formvalues) => {
    this.props.reset();
    this.props.addTodo({ todo: formvalues.todo, complete: false });
  };

  render() {
    const { modalShow, hide } = this.props;

    return (
      <Rodal
        visible={modalShow}
        onClose={hide}
        height={320}
        animation="fade"
        width={420}
      >
        <div className="flex flex-col items-center justify-around w-full h-full">
          <h1 className="text-center text-lg text-gray-700 tracking-wide font-mono">
            Add your todo✨
          </h1>
          <form
            className="flex flex-col text-center items-center"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="todo"
              label="Enter your todo ..."
              component={this.renderInput}
            />
          </form>
        </div>
      </Rodal>
    );
  }
}
export default connect(null, { addTodo })(
  reduxForm({ form: "Todo-Form" })(ModalForm)
);
