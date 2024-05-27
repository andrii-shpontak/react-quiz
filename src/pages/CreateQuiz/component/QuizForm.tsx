import { ErrorMessage, Field, FieldArray, Form, useFormikContext } from 'formik';
import { categories, difficulties } from '../../../shared/constants/quizData';

import React from 'react';
import type { TQuiz } from '../../../shared/types';

const QuizForm = ({ isEditPage }: { isEditPage: boolean }) => {
  const { values, setFieldValue } = useFormikContext<TQuiz>();

  const handleAddOption = (qIndex: number, pushOption: (obj: { id: number; text: string }) => void) => {
    const newOptionId = values.questions[qIndex].options.length + 1;
    pushOption({ id: newOptionId, text: '' });
  };

  const handleRemoveOption = (qIndex: number, oIndex: number, removeOption: (index: number) => void) => {
    removeOption(oIndex);
  };

  const handleAddQuestion = (
    push: (obj: {
      id: number;
      text: string;
      options: { id: number; text: string }[];
      correct_answers: number[];
    }) => void,
  ) => {
    push({
      id: values.questions.length + 1,
      text: '',
      options: [{ id: 1, text: '' }],
      correct_answers: [],
    });
  };

  const handleRemoveQuestion = (qIndex: number, remove: (index: number) => void) => {
    remove(qIndex);
  };

  const handleCorrectAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, qIndex: number, oId: number) => {
    const { checked } = e.target;
    const correctAnswers = values.questions[qIndex].correct_answers;
    if (checked) {
      setFieldValue(`questions.${qIndex}.correct_answers`, [...correctAnswers, oId]);
    } else {
      setFieldValue(
        `questions.${qIndex}.correct_answers`,
        correctAnswers.filter(id => id !== oId),
      );
    }
  };

  return (
    <Form className='p-4 max-w-[800px] mx-auto'>
      <div className='mb-4'>
        <label className='block text-gray-700'>Title</label>
        <Field type='text' name='title' className='w-full px-3 py-2 border rounded' />
        <ErrorMessage name='title' component='div' className='text-red-500' />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Time Limit (minutes)</label>
        <Field type='number' name='timeLimit' className='w-full px-3 py-2 border rounded' />
        <ErrorMessage name='timeLimit' component='div' className='text-red-500' />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Category</label>
        <Field as='select' name='category' className='w-full px-3 py-2 border rounded'>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Field>
        <ErrorMessage name='category' component='div' className='text-red-500' />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Difficulty</label>
        <Field as='select' name='difficulty' className='w-full px-3 py-2 border rounded'>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </Field>
        <ErrorMessage name='difficulty' component='div' className='text-red-500' />
      </div>
      <FieldArray name='questions'>
        {({ push, remove }) => (
          <div className='mb-4'>
            <h3 className='text-xl font-semibold mb-2'>Questions</h3>
            {values.questions.map((question, qIndex) => (
              <div key={qIndex} className='mb-4 p-4 border rounded'>
                <label className='block text-gray-700'>Question {qIndex + 1}</label>
                <Field type='text' name={`questions.${qIndex}.text`} className='w-full px-3 py-2 border rounded mb-2' />
                <ErrorMessage name={`questions.${qIndex}.text`} component='div' className='text-red-500' />
                <h4 className='text-lg font-semibold mb-2'>Options</h4>
                <FieldArray name={`questions.${qIndex}.options`}>
                  {({ push: pushOption, remove: removeOption }) => (
                    <div>
                      {question.options.map((option, oIndex) => (
                        <div key={oIndex}>
                          <div className='flex items-center mb-2'>
                            <Field
                              type='text'
                              name={`questions.${qIndex}.options.${oIndex}.text`}
                              className='w-full px-3 py-2 border rounded mr-2'
                            />
                            <Field
                              type='checkbox'
                              name={`questions.${qIndex}.correct_answers`}
                              value={String(option.id)}
                              checked={values.questions[qIndex].correct_answers.includes(option.id)}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleCorrectAnswerChange(e, qIndex, option.id)
                              }
                              className='form-checkbox'
                            />
                            <button
                              type='button'
                              onClick={() => handleRemoveOption(qIndex, oIndex, removeOption)}
                              className='ml-2 text-red-500 hover:text-red-700'>
                              Remove Option
                            </button>
                          </div>
                          <ErrorMessage
                            name={`questions.${qIndex}.options.${oIndex}.text`}
                            component='div'
                            className='text-red-500'
                          />
                        </div>
                      ))}
                      <ErrorMessage
                        name={`questions.${qIndex}.correct_answers`}
                        component='div'
                        className='text-red-500'
                      />
                      <button
                        type='button'
                        onClick={() => handleAddOption(qIndex, pushOption)}
                        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                        Add Option
                      </button>
                    </div>
                  )}
                </FieldArray>
                <button
                  type='button'
                  onClick={() => handleRemoveQuestion(qIndex, remove)}
                  className='mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                  Remove Question
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={() => handleAddQuestion(push)}
              className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
              Add Question
            </button>
          </div>
        )}
      </FieldArray>
      <button type='submit' className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
        {isEditPage ? 'Edit' : 'Create'} Quiz
      </button>
    </Form>
  );
};

export default QuizForm;
