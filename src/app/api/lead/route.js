import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Lead from '@/models/Lead';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, service, source, sipAmount, investmentAmount, tenureYears, remarks } = body;

    const cleanPhone = (phone || '').replace(/\D/g, '').slice(-10);
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({ error: 'A valid 10-digit mobile number is required' }, { status: 400 });
    }

    const cleanName = (name && name.trim()) ? name.trim() : 'Website Investor';

    await dbConnect();

    // Determine lead number
    const lastLead = await Lead.findOne({ leadNumber: { $exists: true } }).sort({ leadNumber: -1 }).lean();
    const leadNumber = lastLead && typeof lastLead.leadNumber === 'number' ? lastLead.leadNumber + 1 : 1001;
    const leadId = `LEAD-${leadNumber}`;

    const newLead = await Lead.create({
      leadId,
      leadNumber,
      name: cleanName,
      phone: cleanPhone,
      service: service || 'Mutual Funds',
      source: source || 'Website',
      stage: 'New',
      response: 'Pending',
      callStatus: 'Pending',
      sipAmount: Number(sipAmount) || 0,
      investmentAmount: Number(investmentAmount) || 0,
      tenureYears: Number(tenureYears) || null,
      remarks: remarks || 'Inbound Website Lead'
    });

    return NextResponse.json({
      success: true,
      leadId: newLead.leadId,
      message: 'Lead registered successfully'
    });
  } catch (error) {
    console.error('Error creating website lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
