import { createClient } from '@supabase/supabase-js';
import { UserData } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveDiagnosisResult(data: UserData): Promise<void> {
    try {
        const { error } = await supabase
            .from('diagnostics')
            .insert({
                email: data.email || null,
                occupation: data.occupation || null,
                responses: data.responses,
                result: data.result,
                timestamp: data.timestamp.toISOString(),
            });

        if (error) {
            console.error('Error saving diagnosis result:', error);
            throw error;
        }
    } catch (error) {
        console.error('Error saving diagnosis result:', error);
        throw error;
    }
}
