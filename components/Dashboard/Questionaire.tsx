import { PrismaClient } from "@prisma/client";
import { LoadingSVG } from "components/Icons/LoadingSVG";
import { Button } from "components/UI/Button";
import { useEffect, useState } from "react";

const isEmpty = (value: string) => value.trim() === "";

interface Questionaire {
  mood: string;
  sleep: string;
  stress: string;
  support: string;
  therapy: string;

  touched: {
    mood: boolean;
    sleep: boolean;
    stress: boolean;
    support: boolean;
    therapy: boolean;
  };
  valid: {
    mood: boolean;
    sleep: boolean;
    stress: boolean;
    support: boolean;
    therapy: boolean;
  };
}

const intialFormState = {
  mood: "",
  sleep: "",
  stress: "",
  support: "",
  therapy: "",

  touched: {
    mood: false,
    sleep: false,
    stress: false,
    support: false,
    therapy: false,
  },
  valid: {
    mood: false,
    sleep: false,
    stress: false,
    support: false,
    therapy: false,
  },
};

type QuestionaireProps = {
  user: string;
};

export const Questionaire = ({ user }: QuestionaireProps) => {
  const [form, setForm] = useState<Questionaire>(intialFormState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const moodIsValid = !isEmpty(form.mood);
    const sleepIsValid = !isEmpty(form.sleep);
    const stressIsValid = !isEmpty(form.stress);
    const supportIsValid = !isEmpty(form.support);
    const therapyIsValid = !isEmpty(form.therapy);

    setForm((current) => ({
      ...current,
      valid: {
        mood: moodIsValid,
        sleep: sleepIsValid,
        stress: stressIsValid,
        support: supportIsValid,
        therapy: therapyIsValid,
      },
    }));

    const formIsValid =
      moodIsValid &&
      sleepIsValid &&
      stressIsValid &&
      supportIsValid &&
      therapyIsValid;

    if (!formIsValid) {
      console.log("not valid");
      return;
    } else {
      setIsLoading(true);

      const data = {
        mood: form.mood,
        sleep: form.sleep,
        stress: form.stress,
        support: form.support,
        therapy: form.therapy,
        user: user,
      };

      fetch("/api/dashboard/answerQuestions", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application-json" },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-b from-sky-400 to-sky-200 font-Author">
      <form
        className="flex flex-col p-12 text-white border-2 border-white rounded-lg shadow-2xl bg-gradient-to-tr from-blue-400 to-emerald-400 w-[800px] relative"
        onSubmit={submitHandler}
      >
        <div className="relative self-center w-full max-w-lg">
          <div className="blur-lg absolute bg-purple-300 rounded-full -bottom-40  left-[10%]   w-[10rem] h-[10rem] mix-blend-multiply animate-blob  lg:blur-2xl opacity-80 lg:-left-[50%] lg:w-[450px]  lg:h-[450px] " />
          <div className="blur-lg transition absolute animate-delay-sphere-2 bg-pink-300 rounded-full top-[10rem] right-[10%] w-[10rem] h-[10rem] mix-blend-multiply animate-blob lg:blur-2xl opacity-80 lg:right-[-70%] lg:top-[-2rem] lg:w-[450px]  lg:h-[450px] " />
          <div className="blur-lg transition animate-delay-sphere-3 absolute rounded-full top-[20rem]  left-[10%]  delay-1000 w-[10rem] h-[10rem] bg-fuchsia-300 mix-blend-multiply animate-blob lg:blur-2xl opacity-80  lg:left-[-99%] lg:top-[6rem] lg:w-[450px]  lg:h-[450px] " />
        </div>

        <div className="z-50 flex items-center justify-between pb-4">
          <h2 className="text-3xl ">Questionaire</h2>
          <p>MindScape Logo</p>
        </div>

        <div className="z-50 py-4">
          <h2 className="text-xl">How do you currently feel?</h2>

          <fieldset
            className="flex pt-2 justify-evenly"
            defaultValue="mood-one"
          >
            <div className="flex items-center ">
              <input
                name="mood"
                type="radio"
                value="happy"
                id="mood-one"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    mood: e.target.value,
                    touched: {
                      ...current.touched,
                      mood: true,
                    },
                  }))
                }
              />
              <label htmlFor="mood-one">Happy</label>
            </div>
            <div className="flex items-center">
              <input
                name="mood"
                type="radio"
                value="sad"
                id="mood-two"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    mood: e.target.value,
                    touched: {
                      ...current.touched,
                      mood: true,
                    },
                  }))
                }
              />
              <label htmlFor="mood-two">Sad</label>
            </div>
            <div className="flex items-center">
              <input
                name="mood"
                type="radio"
                value="anxious"
                id="mood-three"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    mood: e.target.value,
                    touched: {
                      ...current.touched,
                      mood: true,
                    },
                  }))
                }
              />
              <label htmlFor="mood-three">Anxious</label>
            </div>
            <div className="flex items-center">
              <input
                name="mood"
                type="radio"
                value="frustrated"
                id="mood-four"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    mood: e.target.value,
                    touched: {
                      ...current.touched,
                      mood: true,
                    },
                  }))
                }
              />
              <label htmlFor="mood-four">Frustrated</label>
            </div>
            <div className="flex items-center">
              <input
                name="mood"
                type="radio"
                value="calm"
                id="mood-five"
                onChange={(e) =>
                  setForm((current) => ({
                    ...current,
                    mood: e.target.value,
                    touched: {
                      ...current.touched,
                      mood: true,
                    },
                  }))
                }
              />
              <label htmlFor="mood-five">Calm</label>
            </div>
          </fieldset>
        </div>
        <div className="z-50 py-4">
          <h2 className="text-xl">
            How many hours of sleep do you normally get?
          </h2>
          <fieldset defaultValue="sleep-one">
            <div className="flex pt-2 justify-evenly">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="sleep"
                  value="6"
                  id="sleep-one"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      sleep: e.target.value,
                      touched: {
                        ...current.touched,
                        sleep: true,
                      },
                    }))
                  }
                />
                <label htmlFor="sleep-one">6</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="sleep"
                  value="7"
                  id="sleep-two"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      sleep: e.target.value,
                      touched: {
                        ...current.touched,
                        sleep: true,
                      },
                    }))
                  }
                />
                <label htmlFor="sleep-two">7</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="sleep"
                  value="8"
                  id="sleep-three"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      sleep: e.target.value,
                      touched: {
                        ...current.touched,
                        sleep: true,
                      },
                    }))
                  }
                />
                <label htmlFor="sleep-three">8</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="sleep"
                  value="9+"
                  id="sleep-four"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      sleep: e.target.value,
                      touched: {
                        ...current.touched,
                        sleep: true,
                      },
                    }))
                  }
                />
                <label htmlFor="sleep-four">9+</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="z-50 py-4">
          <h2 className="text-xl">Rate your current level of stress.</h2>
          <p>1 being the lowest - 5 being the highest.</p>
          <fieldset>
            <div className="flex pt-2 justify-evenly">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="stress"
                  value="1"
                  id="stress-one"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      stress: e.target.value,
                      touched: {
                        ...current.touched,
                        stress: true,
                      },
                    }))
                  }
                />
                <label htmlFor="stress-one">1</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="stress"
                  value="2"
                  id="stress-two"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      stress: e.target.value,
                      touched: {
                        ...current.touched,
                        stress: true,
                      },
                    }))
                  }
                />
                <label htmlFor="stress-two">2</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="stress"
                  value="3"
                  id="stress-three"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      stress: e.target.value,
                      touched: {
                        ...current.touched,
                        stress: true,
                      },
                    }))
                  }
                />
                <label htmlFor="stress-three">3</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="stress"
                  value="4"
                  id="stress-four"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      stress: e.target.value,
                      touched: {
                        ...current.touched,
                        stress: true,
                      },
                    }))
                  }
                />
                <label htmlFor="stress-four">4</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="stress"
                  value="5"
                  id="stress-five"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      stress: e.target.value,
                      touched: {
                        ...current.touched,
                        stress: true,
                      },
                    }))
                  }
                />
                <label htmlFor="stress-five">5</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="z-50 py-4">
          <h2 className="text-xl">Do you have a support system in place?</h2>

          <fieldset defaultValue="support-one">
            <div className="flex pt-2 justify-evenly">
              <div className="flex items-center ">
                <input
                  type="radio"
                  name="support"
                  value="yes"
                  id="support-one"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      support: e.target.value,
                      touched: {
                        ...current.touched,
                        support: true,
                      },
                    }))
                  }
                />
                <label htmlFor="support-one">Yes</label>
              </div>
              <div className="flex items-center ">
                <input
                  type="radio"
                  name="support"
                  value="no"
                  id="support-two"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      support: e.target.value,
                      touched: {
                        ...current.touched,
                        support: true,
                      },
                    }))
                  }
                />
                <label htmlFor="support-two">No</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="z-50 py-4">
          <h2 className="text-xl">
            Have you sought counseling/therapy before?
          </h2>

          <fieldset defaultValue="therapy-one">
            <div className="flex pt-2 justify-evenly">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="therapy"
                  value="yes"
                  id="therapy-one"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      therapy: e.target.value,
                      touched: {
                        ...current.touched,
                        therapy: true,
                      },
                    }))
                  }
                />
                <label htmlFor="therapy-one">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="therapy"
                  value="no"
                  id="therapy-two"
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      therapy: e.target.value,
                      touched: {
                        ...current.touched,
                        therapy: true,
                      },
                    }))
                  }
                />
                <label htmlFor="therapy-two">No</label>
              </div>
            </div>
          </fieldset>
        </div>

        <Button styles="bg-bluePrimary px-4 py-1 flex justify-between  self-end">
          {isLoading ? <p className="pr-2">Processing</p> : <p>Submit</p>}{" "}
          {isLoading ? <LoadingSVG /> : null}
        </Button>
      </form>
    </main>
  );
};
