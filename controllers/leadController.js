const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createLead = async (req, res) => {
  const { institution_name, institution_type, city, loan_book_size, email, phone } = req.body;

  try {
    const lead = await prisma.lead.create({
      data: {
        institution_name,
        institution_type,
        city,
        loan_book_size,
        email,
        phone,
      },
    });
    res.status(201).json(lead);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Lead with this email already exists' });
    }
    res.status(500).json({ error: 'Failed to create lead', details: error.message });
  }
};

const getLeadById = async (req, res) => {
  const { id } = req.params;

  try {
    const lead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.status(200).json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving lead' });
  }
};

module.exports = { createLead, getLeadById };
