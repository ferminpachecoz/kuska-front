'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.scss';

// Phone input (bandera + código)
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactPageAlt = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '', // lo vamos a guardar en formato E.164 (ej: +5491123456789)
    pais: ''      // país de residencia (bolivia / argentina)
  });

  // País por defecto del selector de prefijo (ISO-2)
  // Nota: esto NO es el país de residencia, solo el prefijo del teléfono
  const [phoneCountry, setPhoneCountry] = useState('BO');

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.telefono) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!isValidPhoneNumber(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido';
    }

    if (!formData.pais) {
      newErrors.pais = 'Selecciona un país';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFieldError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    clearFieldError(name);
  };

  const handlePhoneChange = (value) => {
    // value viene en E.164 (ej: +59170000000) o undefined si está vacío
    setFormData(prev => ({
      ...prev,
      telefono: value || ''
    }));
    clearFieldError('telefono');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const res = await fetch(`https://kuska-api-production.up.railway.app/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // telefono ya va con +código
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('API error:', data);
        return;
      }

      navigate('/gracias');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Pre inscripción</h1>
            <p className="contact-subtitle">
              Preinscribite y disfrutá un mes gratis del plan Premium al lanzar la app.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={errors.nombre ? 'error' : ''}
                />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                  className={errors.apellido ? 'error' : ''}
                />
                {errors.apellido && <span className="error-message">{errors.apellido}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>

                {/* PhoneInput con bandera + código */}
                <PhoneInput
                  id="telefono"
                  international
                  defaultCountry={phoneCountry}
                  // Para que el usuario no tenga que escribir "+", la UI lo maneja
                  value={formData.telefono || undefined}
                  onChange={handlePhoneChange}
                  onCountryChange={(country) => {
                    // country viene como ISO-2 (ej: 'AR', 'BO')
                    if (country) setPhoneCountry(country);
                  }}
                  // podés habilitar búsqueda si querés:
                  // smartCaret
                  className={errors.telefono ? 'phone-input error' : 'phone-input'}
                />

                {errors.telefono && <span className="error-message">{errors.telefono}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="pais">País (residencia)</label>
                <select
                  id="pais"
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  className={errors.pais ? 'error' : ''}
                >
                  <option value="">Selecciona tu país</option>
                  <option value="bolivia">Bolivia</option>
                  <option value="argentina">Argentina</option>
                  <option value="españa">España</option>
                  <option value="chile">Chile</option>
                  <option value="brasil">Brasil</option>
                </select>
                {errors.pais && <span className="error-message">{errors.pais}</span>}
              </div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            <a href="/terminos-y-condiciones" className='form-terms'> Ver términos y condiciones</a>
          </form>
        </div>

        <div className="contact-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </main>
    </div>
  );
};

export default ContactPageAlt;
