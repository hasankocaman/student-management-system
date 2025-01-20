import React, { useState } from 'react';
import axios from 'axios';

const StudentRegistration = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        studentNumber: '',
        department: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/students', student);
            alert('Öğrenci başarıyla kaydedildi!');
        } catch (error) {
            alert('Kayıt sırasında bir hata oluştu!');
        }
    };

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mt-5">
            <h2>Öğrenci Kayıt Formu</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Ad</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={student.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Soyad</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">E-posta</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Öğrenci Numarası</label>
                    <input
                        type="text"
                        className="form-control"
                        name="studentNumber"
                        value={student.studentNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Bölüm</label>
                    <input
                        type="text"
                        className="form-control"
                        name="department"
                        value={student.department}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Kayıt Ol</button>
            </form>
        </div>
    );
};

export default StudentRegistration; 