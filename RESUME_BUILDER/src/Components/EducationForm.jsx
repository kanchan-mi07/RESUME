import { GraduationCap, Plus, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      start_year: "",
      end_year: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Education
          </h3>
          <p className="text-sm text-gray-500">Add your education details</p>
        </div>

        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
        >
          <Plus />
          Add Education
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No work education is added yet</p>
          <p className="text-sm">Click "Add Education" to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Education #{index + 1}</h4>

                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institution Name"
                  className="px-3 py-2 text-sm"
                />

                <input
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree(e.g., Bachelor's, Master's)"
                  className="px-3 py-2 text-sm"
                />

                <input
                  value={education.field || ""}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  type="text"
                  placeholder="Field of Study"
                  className="px-3 py-2 text-sm"
                />

                <div className="flex gap-3">
                  <input
                    value={education.start_year || ""}
                    onChange={(e) =>
                      updateEducation(index, "start_year", e.target.value)
                    }
                    type="number"
                    placeholder="Start Year (e.g., 2023)"
                    min="2000"
                    max="2100"
                    className="px-3 py-2 text-sm rounded-lg w-1/2"
                  />

                  <input
                    value={education.end_year || ""}
                    onChange={(e) =>
                      updateEducation(index, "end_year", e.target.value)
                    }
                    type="text"
                    placeholder="End Year (e.g., 2027 or Present)"
                    className="px-3 py-2 text-sm rounded-lg w-1/2"
                  />
                </div>
              </div>

              <input
                value={education.gpa || ""}
                onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                type="text"
                placeholder="GPA (optional)"
                className="px-3 py-2 text-sm"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
