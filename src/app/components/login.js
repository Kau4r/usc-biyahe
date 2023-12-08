import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";
import styles from "@/app/components/login.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const prisma = new PrismaClient();

export default function login({ onClose }) {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUp, setSignUp] = useState(false);

  function changeSign() {
    setSignUp(!signUp);
  }

  const onSubmitSignIn = async (data) => {
    try {
      console.log(data);
      const res = await fetch("/api/sign-in");
    } catch (error) {
      console.error("Error Logging In");
    }
  };

  const onSubmitSignUp = async (data) => {
    try {
      console.log(data);
      const user = await prisma.user.findUnique({
        where: { username: data.username },
      });

      if (user) {
        alert("User with that name already exists!");
      } else {
        const res = await fetch("/api/sign-up", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).catch((error) => console.error("Fetch error:", error));

        if (res.ok) {
          alert("User successfully created!");
        } else {
          alert("Error creating user");
        }
      }
    } catch (error) {
      console.error("Error Logging In");
    }
  };

  const [costs, setCosts] = useState([]);

  return (
    <div className={styles.login_bg}>
      <div className={styles.login_box}>
        <div className={styles.box_close}>
          <button onClick={onClose} className={styles.close_button}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitSignIn)}
          className={signUp === false ? styles.signIn : styles.hide}
        >
          <h1 className={styles.title}>Login</h1>

          <input
            {...register("username", { required: true })}
            placeholder="Enter Username"
            className={styles.input}
          />
          {errors.email && (
            <span className={styles.errorMsg}>This field is required</span>
          )}

          <input
            {...register("password", { required: true })}
            type="password" // Set type as password here
            placeholder="Enter Password"
            className={styles.input}
          />
          {errors.password && (
            <span className={styles.errorMsg}>This field is required</span>
          )}

          <input
            type="submit"
            onClick={() => signIn()}
            className={styles.submit}
          />
        </form>
        <form
          onSubmit={handleSubmit(onSubmitSignUp)}
          className={signUp === true ? styles.signUp : styles.hide}
        >
          <h1 className={styles.title}>Sign Up</h1>

          <input
            {...register("username", { required: true })}
            placeholder="Enter Username"
            className={styles.input}
          />
          {errors.username && (
            <span className={styles.errorMsg}>This field is required</span>
          )}

          <input
            {...register("email", { required: true })}
            placeholder="Enter Email"
            className={styles.input}
          />
          {errors.email && (
            <span className={styles.errorMsg}>This field is required</span>
          )}

          <input
            {...register("password", { required: true })}
            type="password" // Set type as password here
            placeholder="Enter Password"
            className={styles.input}
          />
          {errors.password && (
            <span className={styles.errorMsg}>This field is required</span>
          )}

          <input
            {...register("confirmPassword", { required: true })}
            type="password" // Set type as password here
            placeholder="Confirm Password"
            className={styles.input}
          />
          {errors.confirmPassword && (
            <span className={styles.errorMsg}>This field is required</span>
          )}

          <input type="submit" className={styles.submit} />
        </form>
        <span className={styles.sign_txt}>
          Already have an account?{" "}
          <a onClick={changeSign} className={styles.sign_txt_act}>
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
}
