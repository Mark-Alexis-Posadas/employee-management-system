import { faCircleXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Modal({
  dispatch,
  handleFieldChange,
  state,
  handleSubmit,
  isEditing,
  isToggleExist,
  email,
}) {
  return (
    <div className="flex items-center justify-center fixed w-full top-0 left-0 min-h-screen bg-[rgba(0,0,0,0.4)]">
      <form
        className="bg-white dark:bg-gray-700 p-5 md:p-10 w-[900px]"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold dark:text-white text-gray-700 text-4xl mb-2 md:mb-5">
          {isEditing ? "Edit Fields" : "Add fields"}
        </h1>
        {isToggleExist && (
          <p className="text-red-600 text-xl mb-5">{email} Already exist!</p>
        )}
        <div className="relative z-0 w-full mb-2 md:mb-5 group">
          <label className="text-gray-400 text-sm" htmlFor="first_name">
            First name
          </label>
          <input
            value={state.firstName}
            onChange={handleFieldChange}
            type="text"
            name="firstName"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="relative z-0 w-full mb-2 md:mb-5 group">
          <label className="text-gray-400 text-sm" htmlFor="middle_name">
            Middle
          </label>
          <input
            value={state.middleName}
            onChange={handleFieldChange}
            type="text"
            name="middleName"
            id="middle_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>

        <div className="relative z-0 w-full mb-2 md:mb-5 group">
          <label className="text-gray-400 text-sm" htmlFor="last_name">
            last Name
          </label>
          <input
            value={state.lastName}
            onChange={handleFieldChange}
            type="text"
            name="lastName"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>

        <div className="relative z-0 w-full mb-2 md:mb-5 group">
          <label className="text-gray-400 text-sm" htmlFor="email">
            Email address
          </label>
          <input
            value={state.email}
            onChange={handleFieldChange}
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            className="text-white rounded p-2 bg-red-600 flex items-center gap-2"
            onClick={() => dispatch({ type: "HANDLE_CANCEL" })}
          >
            cancel
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <button
            className="text-white rounded p-2 bg-blue-600 flex items-center gap-2"
            type="submit"
          >
            submit
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </div>
  );
}
