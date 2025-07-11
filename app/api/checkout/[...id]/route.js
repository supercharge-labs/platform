import { dbConnect } from '../../lib/dbConnect';
import Checkout from '../../../models/checkout';
// import { v4 as uuidv4 } from 'uuid';

export async function GET(request, { params }) {
    await dbConnect();
    const { id } = params;
  
    try {
      const data = await Checkout.findOne({ id });
      if (!data) {
        return new Response(JSON.stringify({ success: false, message: 'Transaction not found' }), { status: 404 });
      }
      return new Response(JSON.stringify({
        success: true,
        data: {
          amount: data.amount,
          label: data.label,
          message: data.message,
          memo: data.memo,
          reference:data.reference,
          merchant_wallet_address: data.merchant_wallet_address,
          // redirectUrl: data.redirectUrl,
          // email: data.email,
          // loyalty: data.loyalty,
        }
      }), { status: 200 });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
    }
  }